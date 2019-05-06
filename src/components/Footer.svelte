<style>
  footer {
    display: flex;
    justify-content: space-evenly; align-items: center;
    padding: 0 var(--root-wrapper-padding);
    width: 100%;
    margin-top: auto;
    background-color: var(--root-color-background);
    border-top: 1px solid gray;
  }

  nav {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--root-color-primary);
    padding: var(--root-vertical-spacing);
    text-decoration: none;
  }

  a:first-child {
    margin: 0 auto 0 0;
  }

</style>

<footer>
  <nav class="grouping">
    <a href='/about'>
      <span>About Us</span>
    </a>
    <a href='/tos'>
      <span>Terms of Service</span>
    </a>
    <a href='/privacy'>
      <span>Privacy Policy</span>
    </a>
  </nav>
</footer>
