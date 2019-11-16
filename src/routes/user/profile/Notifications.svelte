<style>
  .notifications {
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .notification {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    margin-bottom: 32px;
    border: var(--root-border);
    padding: 8px;
    border-radius: var(--root-border-radius);
  }

  .notifications header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px 0 8px;
  }

  .notifications h3 {
    width: 100%;
  }

  small {
    margin-left: 16px;
  }
</style>

<script>
  import CrossOut from "src/components/icons/CrossOut.svelte";
  import Clock from "src/components/icons/Clock.svelte";
</script>

<ul class="notifications">
  <li class="notification">
    <header>
      <h3>
        Stuff
        <small>| 34min ago</small>
      </h3>
      <CrossOut className="cross-out" />
    </header>
    <p>Hello there friend!</p>
  </li>

  <li class="notification">
    <header>
      <h3>
        Stuff
        <small>| 34min ago</small>
      </h3>
      <CrossOut className="cross-out" />
    </header>
    <p>Hello there friend!</p>
  </li>

  <li class="notification">
    <header>
      <h3>
        Stuff
        <small>| 34min ago</small>
      </h3>
      <CrossOut className="cross-out" />
    </header>
    <p>Hello there friend!</p>
  </li>
</ul>
