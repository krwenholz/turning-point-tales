<style>
  .text {
    display: flex;
    flex-flow: column;
    align-self: center;
    margin: auto;
    max-width: 38rem;
  }

  .hero {
    margin: auto;
    max-width: 38rem;
  }

  @media only screen and (max-width: 45rem) {
    .text {
      max-width: 75%;
    }

    .hero {
      max-width: 95%;
    }
  }
</style>

<svelte:head>
  <title>About - Turning Point Tales</title>
</svelte:head>

<div class="text">
  <h1>You've stumbled on an about page....</h1>

  <p>
    We three kings of millennial times love reading, exploring, and decidng how
    our stories should end. For those three reasons, plus others listed on a
    napkin signed in triplicate, lost, found, subjected to public inquiry, and
    finally buried in soft peat for three months and recycled as kindling, we
    created a place where anyone can get lost for the few minutes they have.
    Meet our founders KC, Kyle, and Cody. You can continue gawking at us or
    start reading stories
    <a href="/user/new">RIGHT NOW.</a>
  </p>

  <img class="hero" src="/three_kings.jpg" alt="Three handsome creators" />
</div>
