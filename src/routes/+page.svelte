<script>
	import {Super, SuperControl, SuperContent} from '$lib';
	import Accordion from '$examples/accordion.svelte';
	import Tabs from '$examples/tabs.svelte';
	import Stepper from '$examples/stepper.svelte';

  const tabs = {
    Tabs,
		Accordion,
		Stepper,
		'Switch': '',
		'Table of contents': ''
  };
</script>

<Super let:select>
  <div class="tabs">
    <SuperControl let:id let:active>
      <button class:active on:click={() => select(id)}>{id}</button>
    </SuperControl>
  </div>

  {#each Object.keys(tabs) as key}
    <SuperContent id={key} opened={key === 'Stepper'}>
      <div class="content">
        <svelte:component this={tabs[key]} />
      </div>
    </SuperContent>
  {/each}
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
