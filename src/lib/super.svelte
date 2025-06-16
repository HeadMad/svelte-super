<script>
  import { setContext } from "svelte";

  let { children } = $props();
  const actives = $state([]);
  const ids = $state([]);
  setContext("super", { actives, ids });
  const createMethod = (handler) => (...items) => items.forEach((item) => handler(item));

  const payload = {
    isActive: (...items) => items.every((item) => actives.includes(item)),

    select: (...items) => !(actives.length = 0) && actives.push(...items),

    open: createMethod( (item) => !actives.includes(item) && actives.push(item)),

    close: createMethod( (item) => actives.includes(item) && actives.splice(actives.indexOf(item), 1)),

    toggle: createMethod((item) => {
      if (actives.includes(item)) actives.splice(actives.indexOf(item), 1);
      else actives.push(item);
    }),

    get controls() {
      return ids.map((id) => ({ id, active: actives.includes(id) }));
    }
  };

</script>

{@render children(payload)}
