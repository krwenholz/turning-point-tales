import rp from "request-promise-native";
import { setSubscriptionDetails } from 'src/lib/server/users';
import { post } from "src/routes/api/payments/charge";

jest.mock('config');
jest.mock('request-promise-native');
jest.mock('src/lib/server/database');
jest.mock('src/lib/server/users');

let req;
let res;

beforeEach(() => {
  expect.hasAssertions();

  req = {
    user: {
      id: 1
    },
    body: {
      token: {
        id: 'foo_token'
      }
    }
  };

  res = {
    send: jest.fn().mockName('mockSend'),
    end: jest.fn().mockName('mockEnd'),
  };
});

test('handles new subscriber success', () => {
  setSubscriptionDetails.mockResolvedValueOnce({
    stripeCustomerId: 'new_customer_foo'
  }).mockResolvedValueOnce({});

  const periodEnd = Date.parse('2019-07-13') / 1000;
  rp.mockResolvedValueOnce({
    id: 'new_customer_foo'
  }).mockResolvedValueOnce({
    id: 'new_subscription_id',
    status: 'active',
    current_period_end: periodEnd,
    customer: 'new_customer_foo',
    latest_invoice: {
      payment_intent: {
        status: 'succeeded'
      }
    }
  });

  return post(req, res).then(() => {
    expect(res.send)
      .toBeCalledWith(JSON.stringify({'status': 'success'}));
    expect(setSubscriptionDetails)
      .toHaveBeenNthCalledWith(2, 1, 'new_customer_foo', 'new_subscription_id', new Date('2019-07-13'));
  })
});

test('handles new subscriber failure', () => {
  rp.mockRejectedValueOnce('bad thing happened');

  return post(req, res).then(() => {
    expect(res.send).toBeCalledWith(JSON.stringify({
      'status': 'error',
      'message': 'The charge failed, please try again or contact support.'
    }));
  })
});

test('handles new subscription failure', () => {
  setSubscriptionDetails.mockResolvedValueOnce({
    stripeCustomerId: 'new_customer_foo'
  }).mockResolvedValueOnce({});

  rp.mockResolvedValueOnce({
    id: 'new_customer_foo'
  }).mockResolvedValueOnce({
    id: 'won\'t matter',
    status: 'fail',
    current_period_end: 0,
    customer: 'won\'t matter',
    latest_invoice: {
      payment_intent: {
        status: 'won\'t matter'
      }
    }
  });

  return post(req, res).then(() => {
    expect(setSubscriptionDetails)
      .toBeCalledWith(1, 'new_customer_foo', null, null);
    expect(res.send).toBeCalledWith(JSON.stringify({
      'status': 'error',
      'message': 'The charge failed, please try again or contact support.'
    }));
  })
});

test('handles database failure', () => {
  setSubscriptionDetails.mockRejectedValueOnce('random db failure');

  rp.mockResolvedValueOnce({
    id: 'new_customer_foo'
  });

  return post(req, res).then(() => {
    expect(rp).toHaveBeenCalled();
    expect(res.send).toBeCalledWith(JSON.stringify({
      'status': 'error',
      'message': 'The charge failed, please try again or contact support.'
    }));
  })
});
