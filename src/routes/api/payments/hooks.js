import Logger from "js-logger";
import config from "config";
import rp from "request-promise-native";
import stripe from "stripe";
import {
  findUserSafeDetails,
  setSubscriptionDetails
} from "src/lib/server/users";

const updateSubscription = (stripeCustomerId, event) => {
  const status = event.data.status;
  const nextPeriodEnd = new Date(event.data.current_period_end * 1000);
  return findUserSafeDetails(stripeCustomerId).then(
    ({ id, subscriptionId, subscriptionPeriodEnd }) => {
      Logger.info(
        "Updating some Stripe details for our user",
        id,
        stripeCustomerId,
        subscriptionId,
        subscriptionPeriodEnd,
        status,
        nextPeriodEnd
      );

      switch (status) {
        case "active":
          return setSubscriptionDetails(
            id,
            stripeCustomerId,
            subscriptionId,
            nextPeriodEnd
          );
        case "past_due":
          return setSubscriptionDetails(
            id,
            stripeCustomerId,
            subscriptionId,
            subscriptionPeriodEnd,
            "Looks like the first attempt to charge your card on record failed."
          );
        default:
          return setSubscriptionDetails(
            id,
            stripeCustomerId,
            subscriptionId,
            subscriptionPeriodEnd,
            "Looks like attempts to charge your card on record failed."
          );
      }
    }
  );
};

/**
 * Tracks subscription events from Stripe.
 */
const post = (req, res) => {
  // https://stripe.com/docs/api/events/object
  // Verify the event is actually from Stripe.
  const event = stripe(config.get("stripe.secretKey")).webhooks.constructEvent(
    req.rawBody,
    req.headers["stripe-signature"],
    config.get("stripe.webhookSecret")
  );
  const stripeCustomerId = event.data.customer;

  Logger.info("Received a Stripe hook", event.type, stripeCustomerId);

  switch (event.type) {
    case "customer.subscription.updated":
      return updateSubscription(stripeCustomerId, event)
        .then(() => {
          res.status(200);
          res.end();
        })
        .catch(err => {
          Logger.error(
            "There was an error updating a customer subscription",
            stripeCustomerId
          );
          res.status(400);
          res.end();
        });
    case "invoice.upcoming":
      Logger.info("Invoice is upcoming for a customer", event.data.customer);
      res.status(200);
      res.end();
      return;
    default:
      Logger.error("Recevied a bad payment hook.", event);
      res.status(400);
      res.end();
      return;
  }
};

export { post };
