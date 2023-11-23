<script>
  import {slide} from "svelte/transition";
  import Accordion from "$lib";
  const items = {
    1: "Первая вкладка",
    2: "Вторая вкладка",
    3: "Третья вкладка",
    4: "Четвертая вкладка",
    5: "Пятая вкладка",
  };
</script>


<Accordion let:select let:close>
  <main>
    {#each Object.keys(items) as key}
      <div>
        <Accordion.Control id={key} let:active>
          <button on:click={() => active ? close(key) :select(key)} class:active>
            {items[key]}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class:active><path fill-rule="evenodd" clip-rule="evenodd" d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor"></path></svg>
          </button>
        </Accordion.Control>
        <Accordion.Content id={key}>
          <p transition:slide>{items[key]}. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Раз рыбными маленький вопрос, подзаголовок рекламных парадигматическая пор родного однажды большого заманивший реторический, толку они, рукописи коварных свою использовало свое?</p>
        </Accordion.Content>
      </div>
    {/each}
  </main>
</Accordion>

<style>
  body {
    display: flex;
    padding: 0;
    margin: 0;
  }
  main {
    width: 500px;
    margin: auto;
  }
  div {
    border-bottom: 1px solid #ddd;
  }
  button {
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    padding: 1em 0;
    background: transparent;
    cursor: pointer;
    font-weight: 400;
    font-size: 1rem;
  }
  button:hover {
    text-decoration: underline;
  }

  svg {
    float: right;
    transition: .3s;
  }
  svg.active {
    transform: rotate(180deg);
  }
  p {
    margin: 0;
    padding-bottom: 1em;
    margin-top: -0.3em;
    color: #666;
  }
</style>
