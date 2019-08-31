# To get started

  npm install
  npm run dev

Because we like using databases though, you probably want to connect locally or to Heroku
with the `DATABASE_URL` environment variable. You can grab the Heroku one with

  heroku pg:credentials:url

Set this before starting the server and you should be good to go.

# Database seeds

We have a script! Run

  CONNECTION_STRING='SOME_URL_FOR_A_DATABASE' npm run db:seed

# Test

  docker run -it -v $PWD:/cypress -w /cypress -e CYPRESS_BASE_URL=http://meine.krwenholz.com:3000 cypress/included:3.4.1 cypress open --browser chrome



# Deploy
All of this is in our CircleCI file as well :)

  docker build .
  heroku container:push web
  heroku container:release web

# Scratch
>  TODO(kyle): share buttons
>    https://gist.github.com/chrisjlee/5196139
>  TODO(kyle): link buttons for facebook, twitter, instagram
>  TODO(kyle): build a great payment flow
>   https://stripe.com/docs/billing/subscriptions/payment#implementing-a-subscription-signup-payment-flow
>   https://stripe.com/docs/billing/quickstart

```
// https://github.com/request/request-promise
rp = require('request-promise-native');

const options = {
  method: 'POST',
  uri: 'https://api.stripe.com/v1/charges',
  headers: {
    'Authorization': 'Basic ' + Buffer.from('***REMOVED***').toString('base64'),
  },
  form: {
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
  }
};

rp(options)
  .then((resp) => {
    console.info('Response: ', resp);
  });
```
