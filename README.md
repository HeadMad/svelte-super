# Svelte Super

This is a powerfull multicomponent. With it, you can create tabs, an accordion, step-by-step instructions, and everything you have enough imagination for.

## Usage:

```html
<script>
  import {Super, SuperControl, SuperContent} from 'svelte-super';
  // Also you can import as default object Super (or more semantic name)
  // And use it with fields: Super.Control and Super.Content
</script>

<Super let:select>

  <div class="tabs">
    <SuperControl let:id let:active>
      <button class:active on:click={() => select(id)}>{id}</button>
    </SuperControl>
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

</Super>

<style>
  .active {
    font-weight: 700;
  }
</style>
```
<br>



## Super

The component has four [let:](https://svelte.dev/docs/special-elements#slot-slot-key-value) directives. These are methods that you can use inside the component. All methods take one or more arguments - the ID of the `SuperContent` or `SuperControl` components.

### Directives:

- `let:open` Return a method makes visible one or more _SuperContent_ blocks whose IDs are passed as arguments.
- `let:close` Return a method hides one or more _SuperContent_ blocks whose IDs are passed as arguments.
- `let:toggle` Returns a method that hides or shows (depending on the current state) one or more _SuperContent_ blocks whose IDs are passed as arguments.
- `let:select` Returns a method that makes visible one or more _SuperContent_ blocks whose IDs are passed as arguments. And makes other blocks hidden.
- `let:isActive` Returns method for checking visibility of _SuperContent_ block whose ID ppassed as argument. Return _boolean_


<br>

## SuperContent (Super.Content)

Everything inside the component will be hidden or shown depending on the property `opened`

### Props:

- `id` (any) The ID of the block. Required.
- `opened` (boolean) If _true_, the block will be shown, else - hidden. This property can be binded. Default: _false_.

### Directives:

- `let:id` The ID of the block.
- `let:opened` Value of the `opened` property.


<br>

## SuperControl (Super.Control)

A component that is associated with the SuperContent block via the id property. But it is always visible.

### Props:

- `id` (any) The ID of the block. Optional*.
- `active` (boolean) If _true_, the block will be shown, else - hidden. This property can be binded. Default: _false_.

### Directives:

- `let:id` The ID of the block.
- `let:active` Value of the `active` property.

<br>

## Notes:

The `id` property is optional. If the `id` property is not passed to the component, then the contents of the component will be applied in a loop to each identifier of each _SuperContent_ block. The identifier value can be accessed via the directive `let:id`.

```html
<script> 
  import Tabs from 'svelte-super';
  
  const tabs = ['Home', 'Blog', 'Contact'];
</script>

<Tabs let:select>

  <Tabs.Control let:id let:active>
    <button class:active on:click={() => select(id)}>{id}</button>
  </Tabs.Control>

  {#each tabs as tab}
    <Tabs.Content id={tab} opened={tab === 'Home'}>
      <h2>{tab}</h2>
      <p>...</p>
    </Tabs.Content>
  {/each}

</Tabs>

<style>
  .active {
    font-weight: 700;
  }
</style>
```
<br>

If you pass the `id` parameter to _SuperControl_ , then the contents of the block will relate only to this identifier. This is convenient, for example, for layout with _SuperContent_ blocks.

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

<Accordion let:toggle>

  {#each Object.entries(faq) as [id, item]}

    <div>
      <Accordion.Control {id} active={id === 'Q1'} let:id let:active >
        <button class:active on:click={() => toggle(id)}>{item.question}</button>
      </Accordion.Control>
      <Accordion.Content id={id}>
        <p transition:slide>{item.answer}</p>
      </Accordion.Content>
    </div>

  {/each}

</Accordion>
```

<br>

Or using `isActive` method, you can create this without `SuperControl` component

```html
...
<Accordion let:toggle let:isActive>

  {#each Object.entries(faq) as [id, item]}

    <div>
      <button
        class:active={isActive(id)}
        on:click={() => toggle(id)}
      >{item.question}</button>

      <Accordion.Content id={id}>
        <p transition:slide>{item.answer}</p>
      </Accordion.Content>
    </div>

  {/each}

</Accordion>
```
