import Logger from 'js-logger';
import config from 'config';

/**
 * Add the Stripe publishable key to a cookie our JS can read.
 */
const exposeStripeKeyMiddleware = (req, res, next) => {
  res.cookie('STRIPE-KEY',
    config.get('stripe.publishableKey'), {
      domain: config.get('server.domain'),
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      name: 'session-' + config.get('server.domain'),
      sameSite: 'strict',
      secure: !config.get('dev'),
    });
  next();
};

export {
  exposeStripeKeyMiddleware,
}