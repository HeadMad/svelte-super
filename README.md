# Svelte Super

This is a powerfull multicomponent. With it, you can create tabs, an accordion, step-by-step instructions, and everything you have enough imagination for.

> This version of the package supports svelte version 5 and higher with [snippets](https://svelte.dev/docs/svelte/snippet).

> If you need support for svelte 4 and slots, use the [first version of this package](https://github.com/HeadMad/svelte-super/blob/main/README.v1.md)


## Usage:

```html
<script>
  import {Super, SuperControl, SuperContent} from 'svelte-super';
  // Also you can import as default object Super (or more semantic name)
  // And use it with fields: Super.Control and Super.Content
</script>

<Super>
{#snippet children({select, open, close, toggle, isActive, controls})}
  <div class="tabs">
    {#each controls as {id, active})}
    <button class:active onclick={() => select(id)}>{id}</button>
    {/each}
  </div>

  <SuperContent id="TAB 1" opened>
    <h2>Tab 1</h2>
    <p>...</p>
  </SuperContent>

  <SuperContent id="TAB 2">
    <h2>Tab 2</h2>
    <p>...</p>
  </SuperContent>

  <SuperContent id="TAB 3">
    <h2>Tab 3</h2>
    <p>...</p>
  </SuperContent>
{/snippet}
</Super>

<style>
  .active {
    font-weight: 700;
  }
</style>
```
<br>



## Super

The component use _snippet children_ instead _slots_ like older version of package. In this snippet has one argument - object with methods and one property.These are methods that you can use inside the component. All methods take one or more arguments - the ID of the `SuperContent` or `SuperControl` components.

```html
<Super>
  {#snippet children({open, close, toggle, select, isActive, controls})}
  ...
  {/snippet}
</Super>
```

### Methods:

- `open` Method makes visible one or more _SuperContent_ blocks whose IDs are passed as arguments.
- `close` Method hides one or more _SuperContent_ blocks whose IDs are passed as arguments.
- `toggle` Method that hides or shows (depending on the current state) one or more _SuperContent_ blocks whose IDs are passed as arguments.
- `select` Method that makes visible one or more _SuperContent_ blocks whose IDs are passed as arguments. And makes other blocks hidden.
- `isActive` Method for checking visibility of _SuperContent_ block whose ID ppassed as argument. Return boolean

### Props:

- `controls` It is an array of objects containing data about blocks _SuperContent_. Each object has the following properties:
- - `id` (any) ID of _SuperContent_ component
- - `active` (boolean) True if _SuperContent_ opened and false? if not

<br>

## SuperContent (Super.Content)

Everything inside the component will be hidden or shown depending on the property `opened`

### Params:

- `id` (any) The ID of the block. Required.
- `opened` (boolean) If _true_, the block will be shown, else - hidden. This property can be binded. Default: _false_.


<br>

## Examples:

```html
<script>
  import { slide } from 'svelte/transition';
  import Accordion from 'svelte-super';
  
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
  <button onclick={() => close(...ids)}>Collapse</button>
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
```


