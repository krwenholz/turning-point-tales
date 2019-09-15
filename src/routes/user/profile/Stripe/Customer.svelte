<script>
  import Button from 'src/components/Button.svelte';
  import { fetchCsrf } from 'src/lib/client/csrf';
  import { fetchStripeKey } from 'src/lib/client/stripe';
  import { Logger } from 'src/lib/client/logger';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';


  const { session } = stores();
  let paymentNotYetProcessed = true;
  let csrf;
  let card;
  let stripe;
  let elements;
  let cardErrors;
  let charging = false;
  let paymentFormDisabled = false;

  const charge = () => {
    charging = true;
    stripe.createToken(card).then((result) => {
      if (result.error) {
        // Inform the customer there was an error.
        cardErrors.textContent = result.error.message;
      } else {
        return Promise.resolve(result.token);
      }
    }).then((token) => {
      const data = {'token': token};

      // Send the token to our server.
      return fetch('/api/payments/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'XSRF-TOKEN': csrf,
        },
        body: JSON.stringify(data),
      })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response['status'] === 'success') {
        paymentNotYetProcessed = false;
        return;
      } else {
        return Promise.reject(response);
      }
      console.info(response);
      charging = false;
    }).catch((response) => {
      console.error('Charging card failed', response);
      cardErrors.textContent = response.message;
      charging = false;
    });
  };

  onMount(() => csrf = fetchCsrf());

  onMount(() => {
    stripe = Stripe(fetchStripeKey());
    elements = stripe.elements();

    const style = {
      base: {
        fontSize: '20px',
        color: "dimgray",
      },
    };

    // Create an instance of the card Element.
    card = elements.create('card', {style});

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount('#card-element');

    // Listen for errors
    card.addEventListener('change', ({error}) => {
      if (error) {
        cardErrors.textContent = error.message;
        paymentFormDisabled = true;
      } else {
        cardErrors.textContent = '';
        paymentFormDisabled = false;
      }
    });
  });

  Logger.info($session.user)
</script>

<style>
  .stripe-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    border: var(--root-border);
    padding: 8px;
    border-radius: var(--root-border-radius);
    font-size: 20px;
  }

  #card-errors {
    color: red;
  }
</style>

<!-- TODO(kyle): only display if we don't have them as a paying customer yet -->
<!-- TODO(kyle): test card 4000 0000 0000 0341 -->
{#if $session.user.stripeCustomerId}
  <p>
    {#if $session.user.subscriptionPeriodEnd > new Date()}
      Looks like we have current payment information for you and you should be adventuring
      smoothly! You can use the form below to update your payment details if you'd like.
    {:else if $session.user.stripeCustomerId}
      We don't seem to have good payment information for you or something is wrong with your
      most recent subscription charge. You can try submitting payment again using the form
      below or contact us at
      <a href="mailto:support@turningpointtales.com">support@turningpointtales.com</a>.
    {/if}
  </p>
{:else}
  <p>Become an adventurer for $4/month. Adventurers see no ads, access the most dangerous
  content two weeks before the masses, and claim a soft spot in our hearts.</p>

  <p>Our hearts are of a very squishy variety, so there's room for everyone.</p>
{/if}

{#if paymentNotYetProcessed}
  <div class="stripe-card">
    <label for="card-element">
      Credit or debit card
    </label>
    <div id="card-element">
      <!-- A Stripe Element will be inserted here. -->
    </div>

    <div
      id="card-errors"
      role="alert"
      bind:this={cardErrors}></div>
  </div>

  <Button
    on:click={charge}
    disabled={paymentFormDisabled}
    isSubmitting={charging}
    >
    Adventure further for $4 a month
  </Button>
{:else}
  <p>Thank you for becoming an adventurer! Welcome to soft spot
  {Math.floor(Math.random() * 1000000000000)}.</p>
{/if}

<!-- TODO(kyle): give option to unsub -->
