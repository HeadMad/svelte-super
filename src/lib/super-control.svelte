<script>
  import { getContext } from "svelte";
  export let active = false;
  export let id;

  const { ids, actives } = getContext("super");

  if (active)
    actives.update((actives) => actives.add(id));

  $: active = $actives.has(id);
</script>

{#if id === undefined}
  {#each $ids as id}
    <slot { id } active={ $actives.has(id) }  />
  {/each}
{:else}
  <slot { id } { active } />
{/if}
