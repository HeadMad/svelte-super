<script>
  import { getContext } from "svelte";
  
  let {children} = $props();
  const {actives, ids} = getContext("super");

</script>


{#each ids as id}
  {@render children({id, active: actives.includes(id)})}
{/each}

