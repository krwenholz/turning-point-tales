import Logger from 'js-logger';
import config from 'config';
import rp from 'request-promise-native';
import {
  setSubscriptionDetails
} from 'src/lib/server/users';

/**
 * If this user is already registered in Stripe, cool, otherwise register them.
 */
const getOrCreateStripeCustomer = (user, cardId) => {
  if (user.stripeCustomerId != null) return Promise.resolve(user.stripeCustomerId);

  const options = {
    method: 'POST',
    uri: 'https://api.stripe.com/v1/customers',
    headers: {
      'Authorization': 'Basic ' + config.get('stripe.secretKey'),
    },
    form: {
      email: user.email,
      source: cardId,
    },
    json: true
  };

  Logger.info('Creating stripe customer for user', user.id);

  return rp(options)
    .then((resp) => {
      const customerId = resp.id;
      Logger.info('Stripe customer created', user.id, customerId);

      return setSubscriptionDetails(user.id, customerId, null, null)
        .then(({
          stripeCustomerId
        }) => stripeCustomerId);
    }).catch((err) => {
      Logger.error('Error creating customer', user.id, err);

      return Promise.reject('Creating user failed.');
    });
};

/**
 * Starts a subscription with Stripe and create any necessary backing components.
 */
const post = (req, res) => {
  return getOrCreateStripeCustomer(req.user, req.body.token.id)
    .then((stripeCustomerId) => {
      const options = {
        method: 'POST',
        uri: 'https://api.stripe.com/v1/subscriptions',
        headers: {
          'Authorization': 'Basic ' + config.get('stripe.secretKey'),
        },
        form: {
          customer: stripeCustomerId,
          items: [{
            plan: config.get('stripe.subscriptionId')
          }],
          expand: ['latest_invoice.payment_intent'],
        },
        json: true
      };

      Logger.info('Creating subscription', req.user.id, stripeCustomerId);
      return rp(options);
    })
    .then((resp) => {
      const subscriptionId = resp.id;
      const paymentIntent = resp.latest_invoice.payment_intent.status;
      const paymentStatus = resp.status;
      const currentPeriodEnd = resp.current_period_end;
      Logger.info('Subscription creation response received', req.user.id, subscriptionId, paymentStatus, paymentIntent, resp.current_period_end)

      if (paymentStatus === 'active' && paymentIntent === 'succeeded') {
        return setSubscriptionDetails(req.user.id, resp.customer, subscriptionId, new Date(currentPeriodEnd * 1000));
      }

      Logger.error('Subscription creation error', req.user.id, paymentStatus, paymentIntent)
      return Promise.reject('Subscription failure')
    })
    .then(() => {
      res.send(JSON.stringify({
        'status': 'success'
      }));
      res.end();
    })
    .catch((err) => {
      Logger.error('Error creating subscription', req.user.id, err);

      res.send(JSON.stringify({
        'status': 'error',
        'message': 'The charge failed, please try again or contact support.'
      }));
      res.end();
    });
}

export {
  post
}