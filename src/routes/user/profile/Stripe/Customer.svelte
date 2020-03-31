<script>
  import Button from "src/components/Button.svelte";
  import { fetchCsrf } from "src/lib/client/csrf";
  import { fetchStripeKey } from "src/lib/client/stripe";
  import { logger } from "src/lib/client/logger";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";

  const { session } = stores();
  let paymentNotYetProcessed = true;
  let finalMessage;
  let csrf;
  let card;
  let stripe;
  let elements;
  let cardErrors;
  let unsubscribeErrors;
  let charging = false;
  let paymentFormDisabled = false;
  let unsubscribing = false;

  const charge = () => {
    charging = true;
    stripe
      .createToken(card)
      .then(result => {
        if (result.error) {
          // Inform the customer there was an error.
          cardErrors = result.error.message;
        } else {
          return Promise.resolve(result.token);
        }
      })
      .then(token => {
        const data = { token: token };

        // Send the token to our server.
        return fetch("/api/payments/charge", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "XSRF-TOKEN": csrf
          },
          body: JSON.stringify(data)
        });
      })
      .then(response => {
        return response.json();
      })
      .then(response => {
        charging = false;

        if (response["status"] === "success") {
          paymentNotYetProcessed = false;
          finalMessage = `Thank you for becoming an adventurer! Welcome to soft spot ${Math.floor(
            Math.random() * 10000
          ).toLocaleString()}.`;
          return;
        }

        return Promise.reject(response);
      })
      .catch(response => {
        logger.error({ err: response }, "Charging card failed");
        cardErrors = response.message;
        charging = false;
      });
  };

  const unsubscribe = () => {
    unsubscribing = true;
    return fetch("/api/payments/unsubscribe", {
      method: "POST",
      headers: { "XSRF-TOKEN": csrf }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        unsubscribing = false;

        if (response["status"] === "success") {
          finalMessage = `Your unsubscription was successful. We and the people under the molehill are sad to see you go.`;
          $session.subscriptionId = null;
          $session.subscriptionPeriodEnd = null;
          return;
        }

        return Promise.reject(response);
      })
      .catch(response => {
        logger.error("Unsubscribing failed");
        unsubscribeErrors = response.message;
        unsubscribing = false;
      });
  };

  onMount(() => (csrf = fetchCsrf()));

  onMount(() => {
    stripe = Stripe(fetchStripeKey());
    elements = stripe.elements();

    const style = {
      base: {
        fontSize: "20px",
        color: "dimgray"
      }
    };

    // Create an instance of the card Element.
    card = elements.create("card", { style });

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount("#card-element");

    // Listen for errors
    card.addEventListener("change", ({ error }) => {
      if (error) {
        cardErrors = error.message;
        paymentFormDisabled = true;
      } else {
        cardErrors = "";
        paymentFormDisabled = false;
      }
    });
  });

  const adventureHome = () => {
    window.location.href = "/"; //hard refresh needed to propogate login
  };
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    border: var(--root-border);
    padding: 8px;
    border-radius: var(--root-border-radius);
    font-size: 20px;
  }

  .errors {
    color: var(--root-color-error);
    padding: 8px 0 8px 0;
  }

  #cancellation {
    border: var(--root-border);
    border-color: var(--root-color-error);
    border-radius: var(--root-border-radius);
    margin-top: 16px;
    padding: 8px;
  }
</style>

{#if $session.user.stripeCustomerId}
  <p>
    {#if $session.user.subscriptionPeriodEnd > new Date()}
      Looks like we have current payment information for you and you should be
      adventuring smoothly! You can use the form below to update your payment
      details if you'd like.
    {:else if $session.user.stripeCustomerId}
      We don't seem to have good payment information for you or something is
      wrong with your most recent subscription charge. You can try submitting
      payment again using the form below or contact us at
      <a href="mailto:support@turningpointtales.com">
        support@turningpointtales.com
      </a>
      .
    {/if}
  </p>
{:else}
  <p>
    Become an adventurer for $4/month. Adventurers see no ads, access all
    content, support our paid creators, and claim a soft spot in our hearts.
  </p>

  <p>Our hearts are of a very squishy variety, so there's room for everyone.</p>
{/if}

{#if finalMessage}
  <div class="card">
    <p>{finalMessage}</p>
  </div>
{/if}

{#if paymentNotYetProcessed}
  <div class="card fs-block">
    <label for="card-element">Credit or debit card</label>
    <div id="card-element">
      <!-- A Stripe Element will be inserted here. -->
    </div>

    {#if cardErrors}
      <div class="errors" role="alert">{cardErrors}</div>
    {/if}
  </div>

  <Button
    on:click="{charge}"
    disabled="{paymentFormDisabled}"
    isSubmitting="{charging}"
  >
    {#if $session.user.stripeCustomerId}
      Continue adventuring for $4 a month
    {:else}Adventure further for $4 a month{/if}
  </Button>
{:else}
  <Button on:click="{adventureHome}" disabled="{paymentFormDisabled}">
    Head home and start adventuring!
  </Button>
{/if}

{#if $session.user.stripeCustomerId}
  <div id="cancellation">
    <p>
      If you'd like to cancel your subscription and join the regular townfolk,
      that's okay. You can use the button below to unsubscribe.
    </p>

    {#if unsubscribeErrors}
      <div class="errors" role="alert">{unsubscribeErrors}</div>
    {/if}

    <Button on:click="{unsubscribe}" isSubmitting="{unsubscribing}">
      Cancel subscription
    </Button>
  </div>
{/if}
