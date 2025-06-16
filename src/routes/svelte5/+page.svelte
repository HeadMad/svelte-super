<script> 
  import { slide } from 'svelte/transition';
  import Accordion from '$lib';
  
  const faq = {
    'Q1': {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    'Q2': {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    'Q3': {
      question: 'Question 3',
      answer: 'Answer 3',
    },
  };
</script>


<Accordion >
{#snippet children({toggle, close, isActive})}
{@const ids = Object.keys(faq)}

  {#if isActive(...ids)}
  <button onclick={() => close(...ids)}>Collapse </button>
  {/if}

  {#each Object.entries(faq) as [id, item]}
  {@const active = isActive(id)}
  <div>
    <button class:active onclick={() => toggle(id)}>{item.question}</button>

    <Accordion.Content {id}>
      <p transition:slide>{item.answer}</p>
    </Accordion.Content>
  </div>
  {/each}
  
{/snippet}
</Accordion>

<style>
  .active {
    border-color: #000
  }
</style>