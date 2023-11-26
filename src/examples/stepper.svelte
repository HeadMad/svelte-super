<script>
  import Steps from "$lib";
  var steps = [1,2,3,4,5];

  var current;
</script>


<div class="block">
  <Steps let:select>
    <div class="pagination">
      <Steps.Control let:id let:active>
      <span class:active>{id}</span>
      </Steps.Control>
    </div>
    {#each steps as id, i}
      <Steps.Content {id} opened={!i}>
        <h1>Step {id}</h1>
        <p>Content for step {id}</p>
        {#if i < steps.length - 1}
        <button on:click={() => select(id+1)}>Next</button>
        {/if}
      </Steps.Content>
    {/each}
  </Steps>
</div>

<style>
  .block {
    max-width: 400px;
    margin: 5rem auto auto;
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #bbbbbbff;
    color: #fff;
    text-align: center;
    line-height: 1.5rem;
  }
  
  span.active ~ :global(span) {
    background: #bbbbbb50;
    color: #000;
  }
</style>