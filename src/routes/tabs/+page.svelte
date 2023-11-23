<script>
  import Tabs from "$lib";

  const tabs = {
    "1": "First tab",
    "2": "Second tab",
    "3": "Third tab",
    "4": "Fourth tab",
    "5": "Fifth tab",
  };
</script>

<Tabs let:select>
  <div class="tabs">
    <Tabs.Control let:id let:active>
      <button class:active on:click={() => select(id)}>{tabs[id]}</button>
    </Tabs.Control>
  </div>

  {#each Object.keys(tabs) as key}
    <Tabs.Content id={key} opened={key === "3"}>
      <div class="content">
        <h3>{tabs[key]}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          reprehenderit aperiam officia provident, ullam omnis blanditiis illum
          quod perferendis quae enim numquam animi aut veritatis beatae!
          Aspernatur nam dolores ipsum?
        </p>
      </div>
    </Tabs.Content>
  {/each}
</Tabs>

<style>
  .tabs {
    border-bottom: 1px solid currentColor;
  }
  button {
    /* font-size: 1rem; */
    border: none;
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    background: transparent;
    border-bottom: 2px solid transparent;
  }

  button.active {
    border-bottom-color: currentColor;
  }

  .content {
    padding: 0 0.7rem;
  }
</style>
