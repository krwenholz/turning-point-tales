<style>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 var(--root-wrapper-padding);
    width: 100%;
    margin-top: auto;
    background-color: var(--root-color-background);
    border-top: 1px solid gray;
  }

  nav {
    flex: 1;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--root-color-primary);
    padding: var(--root-vertical-spacing);
    text-decoration: none;
  }

  .social {
    width: 30px;
  }
</style>

<footer>
  <nav class="grouping">
    <a href="/faq">
      <span>FAQ</span>
    </a>
    <a href="/about">
      <span>About Us</span>
    </a>
    <a href="/tos">
      <span>Terms of Service</span>
    </a>
    <a href="/privacy">
      <span>Privacy Policy</span>
    </a>
    <a href="https://twitter.com/TPTales" target="_blank" rel="noopener noreferrer">
      <img alt="Twitter" class="social" src="/social/twitter_circle.png">
    </a>
    <a href="https://www.instagram.com/TurningPointTales/" target="_blank" rel="noopener noreferrer">
      <img alt="Instagram" class="social" src="/social/instagram.png">
    </a>
  </nav>

  <span>&#169; {new Date().getFullYear()} How Hard Would It Be LLC</span>
</footer>
