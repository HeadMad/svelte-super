<script>
  import { getContext } from "svelte";
  export let opened = false;
  export let id = "";
  const { ids, active } = getContext("super");

  if (opened)
    active.update((active) => active.add(id));

  ids.update((ids) => ids.add(id));

  $: opened = $active.has(id);
</script>

{#if opened}
  <slot {opened} {id} />
{/if}
