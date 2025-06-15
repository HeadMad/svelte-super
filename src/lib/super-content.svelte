<script>
  import { getContext } from "svelte";
  let { children, id, opened = $bindable(false)} = $props();

  const {actives, ids} = getContext("super");

  ids.push(id);

  if (opened) 
    actives.push(id);
  
  $effect(() => {
    opened = actives.includes(id);
  });

</script>

{#if opened}
  {@render children({ opened, id })}
{/if}
