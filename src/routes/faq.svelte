<style>
  section {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media only screen and (min-width: 700px) {
    section {
      padding: 25vw;
    }
  }

  details {
    width: 100%;
    border: 1px solid #aaa;
    padding: .5em .5em 0;
  }

  section details:first-of-type {
    border-radius: var(--root-border-radius) var(--root-border-radius) 0 0;
  }

  section details:last-of-type {
    border-radius: 0 0 var(--root-border-radius) var(--root-border-radius);
  }

  summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
    cursor: pointer;
  }

  details[open] {
    padding: .5em;
  }

  details[open] summary {
    border-bottom: 1px solid var(--root-color-primary-altered);
    margin-bottom: .5em;
  }
</style>

<svelte:head>
  <title>Frequently Asked Questions</title>
</svelte:head>

<section>
  <h2>FAQ</h2>

  <details>
    <summary>When is the next story coming?</summary>
    Subscribers should expect a new story every three to four weeks. Three weeks later,
    we'll release the story for non-subscribers. In between releases, subscribers should
    expect emails with teasers, creator interviews, and more.
  </details>

  <details>
    <summary>Who are your creators?</summary>
    Their names are on the stories! But seriously, we're sourcing creators wherever we
    can find them. The only real criteria being that they write interesting tales we
    think people would like. If you or someone you know can do that then please reach out
    to us at <a href="mailto:creators@h2wib.com">creators@h2wib.com</a>.
  </details>

  <details>
    <summary>What kind of content is this?</summary>
    Tales. Choice oriented tales. We're working with creators interested in producing
    science fiction, fantasy, murder mystery, and even geographic noir. As long as their
    tale allows the reader to enjoy in the agency of creation, we're interested in publishing.
  </details>

  <details>
    <summary>Why do you require accounts?</summary>
    Creating an account grants you access to the entire library of adventures.
    We use your email and name, which we never share with anyone else, to personalize the
    experience and send you exciting updates. In lieu of sharing your data and browsing with
    a third party, we handcraft some interesting offers or let you skip those entirely
    with a paid subscription.
  </details>

  <details>
    <summary>How do I cancel a subscription?</summary>
    We hate to see you go. If there's anything we can do to convince you to stay, please
    hit us up at
    <a href="mailto:support@turningpointtales.com">support@turningpointtales.com</a>.
    If you still want to become a regular townsperson again, then head to
    <a href="/user/profile?tab=adventurer">your profile</a>.
  </details>

  <details>
    <summary>What is this H2WIB?</summary>
    We're a business with ambitions to have other businesses, so we made a parent company
    to take care of all the baby businesses! We called it "How Hard Would It Be LLC". You
    can learn a little more <a href="h2wib.com">here</a>.
  </details>
</section>
