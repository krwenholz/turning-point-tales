import { logger } from "src/logging";
import config from "config";
import rp from "request-promise-native";
import { setSubscriptionDetails } from "src/db/users";

/**
 * If this user is already registered in Stripe, cool, otherwise register them.
 */
const getOrCreateStripeCustomer = (user, cardId) => {
  if (user.stripeCustomerId != null)
    return Promise.resolve(user.stripeCustomerId);

  const options = {
    method: "POST",
    uri: "https://api.stripe.com/v1/customers",
    headers: {
      Authorization: "Basic " + config.get("stripe.secretKey")
    },
    form: {
      email: user.email,
      source: cardId
    },
    json: true
  };

  logger.info({ userId: user.id }, "Creating stripe customer for user");

  return rp(options)
    .then(resp => {
      const customerId = resp.id;
      logger.info({ userId: user.id, customerId }, "Stripe customer created");

      return setSubscriptionDetails(user.id, customerId, null, null).then(
        ({ stripeCustomerId }) => stripeCustomerId
      );
    })
    .catch(err => {
      logger.error({ userId: user.id, err: err }, "Error creating customer");

      return Promise.reject("Creating user failed.");
    });
};

/**
 * Starts a subscription with Stripe and create any necessary backing components.
 */
const post = (req, res) => {
  return getOrCreateStripeCustomer(req.user, req.body.token.id)
    .then(stripeCustomerId => {
      const options = {
        method: "POST",
        uri: "https://api.stripe.com/v1/subscriptions",
        headers: {
          Authorization: "Basic " + config.get("stripe.secretKey")
        },
        form: {
          customer: stripeCustomerId,
          items: [
            {
              plan: config.get("stripe.subscriptionId")
            }
          ],
          expand: ["latest_invoice.payment_intent"]
        },
        json: true
      };

      logger.info(
        { userId: req.user.id, stripeCustomerId: stripeCustomerId },
        "Creating subscription"
      );
      return rp(options);
    })
    .then(resp => {
      const subscriptionId = resp.id;
      const paymentIntent = resp.latest_invoice.payment_intent.status;
      const paymentStatus = resp.status;
      const currentPeriodEnd = resp.current_period_end;
      logger.info(
        {
          userId: req.user.id,
          subscriptionId,
          paymentStatus,
          paymentIntent,
          currentPeriodEnd: resp.current_period_end
        },
        "Subscription creation response received"
      );

      if (paymentStatus === "active" && paymentIntent === "succeeded") {
        return setSubscriptionDetails(
          req.user.id,
          resp.customer,
          subscriptionId,
          new Date(currentPeriodEnd * 1000)
        );
      }

      logger.error(
        { userId: req.user.id, paymentStatus, paymentIntent },
        "Subscription creation error"
      );
      return Promise.reject("Subscription failure");
    })
    .then(() => {
      res.send(
        JSON.stringify({
          status: "success"
        })
      );
      res.end();
    })
    .catch(err => {
      logger.error(
        { userId: req.user.id, err: err },
        "Error creating subscription"
      );

      res.send(
        JSON.stringify({
          status: "error",
          message: "The charge failed, please try again or contact support."
        })
      );
      res.end();
    });
};

export { post };
