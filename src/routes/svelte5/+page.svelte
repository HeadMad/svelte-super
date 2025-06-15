<script>
  import Super from "$lib";
</script>

<Super>
  {#snippet children({ open, close, toggle, select, isActive, controls })}
    <button
      onclick={() => select("TAB 1", "TAB 3")}
      class:active={isActive("TAB 1", "TAB 3")}>Select 1 3</button
    >

      {#each controls as { id, active }}
      <div class:active style:margin="10px">
        <button onclick={() => open(id)}>Open {id}</button>
        <button onclick={() => close(id)}>Close {id}</button>
        <button onclick={() => toggle(id)}>Toggle {id}</button>
        <button onclick={() => select(id)}>Select {id}</button>
      </div>
    {/each}

    <Super.Content id="TAB 1" opened>
      <h1>Tab 1</h1>
    </Super.Content>

    <Super.Content id="TAB 2">
      <h1>Tab 2</h1>
    </Super.Content>

    <Super.Content id="TAB 3">
      <h1>Tab 3</h1>
    </Super.Content>
  {/snippet}
</Super>

<style>
  .active {
    border: 2px solid #000;
  }
</style>
