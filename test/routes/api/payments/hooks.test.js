import stripe from 'stripe';
import { findUserSafeDetails, setSubscriptionDetails } from 'src/lib/server/users';
import { post } from "src/routes/api/payments/hooks";

jest.mock('stripe');
jest.mock('src/lib/server/users');

let req;
let res;

beforeEach(() => {
  expect.hasAssertions();

  req = {
    body: {
      data: {
        customer: 'new_customer_foo'
      }
    },
    headers: {}
  };

  stripe.mockReturnValue({
    webhooks: {
      constructEvent: jest.fn().mockReturnValue(req.body)
    }
  });

  res = {
    status: jest.fn().mockName('mockStatus'),
    end: jest.fn().mockName('mockEnd'),
  };
});

test('handles active subscription update', () => {
  findUserSafeDetails.mockResolvedValueOnce({
    id: 1,
    stripeCustomerId: 'new_customer_foo',
    subscriptionId: 'sub',
    subscriptionPeriodEnd: new Date(),
  });

  setSubscriptionDetails.mockResolvedValueOnce('m');

  req.body.type = 'customer.subscription.updated';
  req.body.data.status = 'active';
  req.body.data.current_period_end = Date.parse('2019-07-13') / 1000;

  return post(req, res).then(() => {
    expect(setSubscriptionDetails)
      .toHaveBeenCalledWith(1, 'new_customer_foo', 'sub', new Date('2019-07-13'));
    expect(res.status)
      .toHaveBeenCalledWith(200);
  })
});

test('handles past_due subscription update', () => {
  findUserSafeDetails.mockResolvedValueOnce({
    id: 1,
    stripeCustomerId: 'new_customer_foo',
    subscriptionId: 'sub',
    subscriptionPeriodEnd: new Date('1990-07-13'),
  });

  setSubscriptionDetails.mockResolvedValueOnce();

  req.body.type = 'customer.subscription.updated';
  req.body.data.status = 'past_due';
  req.body.data.current_period_end = 1000;

  return post(req, res).then(() => {
    expect(setSubscriptionDetails)
      .toHaveBeenCalledWith(1, 'new_customer_foo', 'sub', new Date('1990-07-13'),
        'Looks like the first attempt to charge your card on record failed.');
    expect(res.status)
      .toHaveBeenCalledWith(200);
  })
});

test('handles other subscription update', () => {
  findUserSafeDetails.mockResolvedValueOnce({
    id: 1,
    stripeCustomerId: 'new_customer_foo',
    subscriptionId: 'sub',
    subscriptionPeriodEnd: new Date('1990-07-13'),
  });

  setSubscriptionDetails.mockResolvedValueOnce({});

  req.body.type = 'customer.subscription.updated';
  req.body.data.status = 'f';
  req.body.data.current_period_end = 1000;

  return post(req, res).then(() => {
    expect(setSubscriptionDetails)
      .toHaveBeenCalledWith(1, 'new_customer_foo', 'sub', new Date('1990-07-13'),
        'Looks like attempts to charge your card on record failed.');
    expect(res.status)
      .toHaveBeenCalledWith(200);
  })
});

test('handles invoice incoming', () => {
  req.body.type = 'invoice.upcoming';

  post(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
});

test('handles unknown hook', () => {
  req.body.type = 'bad';

  post(req, res);

  expect(res.status).toHaveBeenCalledWith(400);
});
