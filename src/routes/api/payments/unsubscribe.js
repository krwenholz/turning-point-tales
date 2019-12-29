import { logger } from "src/logging";
import config from "config";
import rp from "request-promise-native";
import { setSubscriptionDetails } from "src/lib/server/users";

/**
 * Cancels a subscription with Stripe and deletes our record.
 */
const post = (req, res) => {
  if (req.user.stripeCustomerId == null) {
    res
      .send(
        JSON.stringify({
          status: "success"
        })
      )
      .end();
    return;
  }

  const options = {
    method: "DELETE",
    uri: `https://api.stripe.com/v1/subscriptions/${req.user.subscriptionId}`,
    headers: {
      Authorization: "Basic " + config.get("stripe.secretKey")
    },
    json: true
  };

  logger.info({ userId: req.user.id }, "Unsubsribing user");

  return rp(options)
    .then(resp => {
      logger.info(
        { userId: req.user.id, subscriptionId: req.user.subscriptionId },
        "Stripe unsubscribe succeeded"
      );

      return setSubscriptionDetails(req.user.id, resp.customer, null, null);
    })
    .then(() => {
      res
        .send(
          JSON.stringify({
            status: "success"
          })
        )
        .end();
      return;
    })
    .catch(err => {
      if (err.statusCode == 404) {
        logger.info(
          { userid: req.user.id, subscriptionId: req.user.subscriptionId },
          "Stripe subscription not found, call it a success"
        );
        res
          .send(
            JSON.stringify({
              status: "success"
            })
          )
          .end();
        return setSubscriptionDetails(req.user.id, resp.customer, null, null);
      }

      logger.error(
        {
          err: err,
          userid: req.user.id,
          subscriptionId: req.user.subscriptionId
        },
        "Error unsubscribing customer"
      );

      res.send(
        JSON.stringify({
          status: "error",
          message: "Unsubscribing failed, please try again or contact support."
        })
      );
      res.end();
    });
};

export { post };
