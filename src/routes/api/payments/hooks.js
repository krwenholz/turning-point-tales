import { logger } from "src/logging";
import config from "config";
import rp from "request-promise-native";
import stripe from "stripe";
import {
  findUserSafeDetails,
  setSubscriptionDetails
} from "src/lib/server/users";

const updateSubscription = (stripeCustomerId, event) => {
  const status = event.data.object.status;
  const nextPeriodEnd = new Date(event.data.object.current_period_end * 1000);
  return findUserSafeDetails(stripeCustomerId).then(
    ({ id, subscriptionId, subscriptionPeriodEnd }) => {
      logger.info(
        {
          id,
          stripeCustomerId,
          subscriptionId,
          subscriptionPeriodEnd,
          status,
          nextPeriodEnd
        },
        "Updating some Stripe details for our user"
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
  const stripeCustomerId = event.data.object.customer;

  logger.info(
    { eventType: event.type, stripeCustomerId },
    "Received a Stripe hook"
  );

  switch (event.type) {
    case "customer.subscription.updated":
      return updateSubscription(stripeCustomerId, event)
        .then(() => {
          res.status(200);
          res.end();
        })
        .catch(err => {
          logger.error(
            { stripeCustomerId },
            "There was an error updating a customer subscription"
          );
          res.status(400);
          res.end();
        });
    case "invoice.upcoming":
      logger.info(
        { customer: event.data.object.customer },
        "Invoice is upcoming for a customer"
      );
      res.status(200);
      res.end();
      return;
    default:
      logger.error({ event: event }, "Recevied a bad payment hook.");
      res.status(400);
      res.end();
      return;
  }
};

export { post };
