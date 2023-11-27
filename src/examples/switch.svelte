<script>
	import Switch from '$lib';
</script>
<div class="block">
  
  <Switch let:select let:open let:close let:toggle>
    <div class="switcher">
      <Switch.Control id="1" let:id let:active active>
        <button class:active on:click={() => select(id)}>True</button>
      </Switch.Control>
      
      <Switch.Control id="0" let:id let:active>
        <button class:active on:click={() => select(id)}>False</button>
      </Switch.Control>
    </div>

    
    <div class="toggle-wrap">
      <Switch.Control id="toggle" let:id let:active >
          <button
            on:click={() => toggle(id)}
            class="toggle"
            class:active
          ></button>
        </Switch.Control>
    </div>

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
    border-radius: .8rem;
    background: buttonface;
    margin: 0.5rem;
    position: relative;
    border: 0;
    cursor: pointer;
    transition: .3s;
  }

  .toggle::after {
    content: "";
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: .7rem;
    background: white;
    top: .1rem;
    left: .1rem;
    transition: .3s;
  }

  .toggle.active {
    background: black;
  }

  .toggle.active::after {
    left: auto;
    left: 1.1rem;
  }
	</style>