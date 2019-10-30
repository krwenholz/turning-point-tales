import Logger from 'js-logger';
import config from 'config';
import rp from 'request-promise-native';
import {
  setSubscriptionDetails
} from 'src/lib/server/users';

/**
 * Cancels a subscription with Stripe and deletes our record.
 */
const post = (req, res) => {
  if (req.user.stripeCustomerId == null) {
    res.send(JSON.stringify({
      'status': 'success'
    })).end();
    return;
  }

  const options = {
    method: 'DELETE',
    uri: `https://api.stripe.com/v1/subscriptions/${req.user.subscriptionId}`,
    headers: {
      'Authorization': 'Basic ' + config.get('stripe.secretKey'),
    },
    json: true
  };

  Logger.info('Unsubsribing user', req.user.id);

  return rp(options)
    .then((resp) => {
      Logger.info('Stripe unsubscribe succeeded', req.user.id, req.user.subscriptionId);

      return setSubscriptionDetails(req.user.id, resp.customer, null, null);
    }).then(() => {
      res.send(JSON.stringify({
        'status': 'success'
      })).end();
      return;
    })
    .catch((err) => {
      if (err.statusCode == 404) {
        Logger.info('Stripe subscription not found, call it a success', req.user.id, req.user.subscriptionId);
        res.send(JSON.stringify({
          'status': 'success'
        })).end();
        return setSubscriptionDetails(req.user.id, resp.customer, null, null);
      }

      Logger.error('Error unsubscribing customer', req.user.id, req.user.stripeCustomerId, err);

      res.send(JSON.stringify({
        'status': 'error',
        'message': 'Unsubscribing failed, please try again or contact support.'
      }));
      res.end();
    });
}

export {
  post
}