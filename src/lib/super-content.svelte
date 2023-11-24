<script>
  import { getContext } from "svelte";
  export let opened = false;
  export let id = "";
  const { ids, active } = getContext("super");

  ids.update((ids) => ids.add(id));

  if (opened) active.update((active) => active.add(id));

  $: opened = $active.has(id);
</script>

{#if opened}
  <slot {opened} {id} />
{/if}
