<script>
  import { getContext } from "svelte";
  export let id = null;

  const { ids, active } = getContext("super");
</script>

{#if id === null}
  {#each $ids as id}
    <slot {id} active={$active.has(id)} />
  {/each}
{:else}
  <slot {id} active={$active.has(id)} />
{/if}
