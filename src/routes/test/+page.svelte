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

<Accordion let:toggle let:isActive>

  {#each Object.entries(faq) as [id, item]}

    <div>
      <button class:active={isActive(id)} on:click={() => toggle(id)}>{item.question}</button>

      <Accordion.Content id={id}>
        <p transition:slide>{item.answer}</p>
      </Accordion.Content>
    </div>

  {/each}

</Accordion>