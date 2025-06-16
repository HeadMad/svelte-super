<script>
	import {Super, SuperControl, SuperContent} from '$lib';
	import Accordion from '$examples/accordion.svelte';
	import Tabs from '$examples/tabs.svelte';
	import Stepper from '$examples/stepper.svelte';
	import Switch from '$examples/switch.svelte';

  const tabs = {
    Tabs,
		Accordion,
		Stepper,
		Switch,
		'Table of contents': ''
  };
</script>

<Super let:select>
  {#snippet children({select})}
  <div class="tabs">
    <SuperControl>
      {#snippet children({id, active})}
      <button class:active onclick={() => select(id)}>{id}</button>
      {/snippet}
    </SuperControl>
  </div>

  {#each Object.keys(tabs) as key}
    <SuperContent id={key} opened={key === 'Switch'}>
      <div class="content">
        <svelte:component this={tabs[key]} />
      </div>
    </SuperContent>
  {/each}
  {/snippet}
</Super>

<style>
  .tabs {
    border-bottom: 1px solid currentColor;
  }
  button {
    /* font-size: 1rem; */
    border: none;
    padding:  .5rem .7rem;
    cursor: pointer;
    background:transparent;
    border-bottom: 2px solid transparent;
  }

  button.active {
    border-bottom-color: currentColor;
  }

  .content {
    padding: 0 .7rem;
  }
</style>
