<script>
  import { getContext } from "svelte";
  export let opened = false;
  export let id = "";
  const { ids, actives } = getContext("super");

  ids.update((ids) => ids.add(id));

  if (opened)
    actives.update((actives) => actives.add(id));

  $: opened = $actives.has(id);
</script>

{#if opened}
  <slot {opened} {id} />
{/if}
