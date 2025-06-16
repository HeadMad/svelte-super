<script>
  import Switch from "$lib";
</script>

<div class="block">
  
  <Switch>
    {#snippet children({select, isActive})}

    <div class="switcher">
      <button use:select={1} class:active={isActive(1)} onclick={() => select(1)}>True</button>
      <button class:active ={isActive(0)} onclick={() => select(0)}>False</button>
    </div>

    {/snippet}
  </Switch>

  <Switch>
    {#snippet children({toggle, isActive})}
    <div class="toggle-wrap">
          <button
            onclick={() => toggle('toggle')}
            class="toggle"
            class:active={isActive('toggle')}
            aria-label="toggle"
          ></button>
    </div>
    {/snippet}
  </Switch>
</div>

<style>
  .block {
    max-width: 350px;
    padding: 1rem;
    margin: 5rem auto auto;
  }
  .switcher {
    text-align: center;
  }
  .switcher button {
    border: 0;
    height: 2rem;
    border-radius: 0.3rem;
    padding: 0 1rem;
  }
  .switcher .active {
    background: black;
    color: white;
  }

  .toggle-wrap {
    margin-top: 2rem;
    text-align: center;
  }

  .toggle {
    display: inline-block;
    width: 2.6rem;
    height: 1.6rem;
    border-radius: 0.8rem;
    background: buttonface;
    margin: 0.5rem;
    position: relative;
    border: 0;
    cursor: pointer;
    transition: 0.3s;
  }

  .toggle::after {
    content: "";
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 0.7rem;
    background: white;
    top: 0.1rem;
    left: 0.1rem;
    transition: 0.3s;
  }

  .toggle.active {
    background: black;
  }

  .toggle.active::after {
    left: auto;
    left: 1.1rem;
  }
</style>
