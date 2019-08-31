<script>
  import { stores } from '@sapper/app';

  const { session } = stores();
</script>

<style>
  h1 {
    font-size: var(--root-font-size-md);
    margin: 0 0 0 8px;
  }
</style>

<h1>foo</h1>

<!-- TODO(kyle): fetch info async if they're a paid customer (on mount maybe?) -->
<!-- TODO(kyle): give option to pay with Stripe -->
<!-- TODO(kyle): give option to unsub -->
<!-- TODO(kyle): display correct subscription level -->
<!-- TODO(kyle): save shit in database -->
<!-- TODO(kyle): allow updates via Stripe -->
<!-- TODO(kyle): https://stripe.com/docs/billing/subscriptions/payment -->
<!-- TODO(kyle): https://stripe.com/docs/billing/subscriptions/discounts -->
<!-- TODO(kyle): https://stripe.com/docs/billing/webhooks -->
<!-- TODO(kyle): https://dashboard.stripe.com/test/subscriptions/products/prod_FiSAk9R3Y0VPeU -->
