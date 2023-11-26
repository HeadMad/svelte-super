<script>
  import { writable } from "svelte/store";
  import { setContext } from "svelte";

  let ids = writable(new Set());
  let actives = writable(new Set());

  const createMethod = (handler) => (...items) => {
    actives.update((actives) => {
      items.forEach((item) => handler(actives, item));
      return actives;
    });
  };

  const open = createMethod((actives, item) => actives.add(item));

  const close = createMethod((actives, item) => actives.delete(item));

  const toggle = createMethod((actives, item) => {
    if (actives.has(item)) actives.delete(item);
    else actives.add(item);
  });

  const select = (...items) => actives.set(new Set(items));

  setContext("super", {
    ids,
    actives,
  });
</script>

<slot {open} {close} {toggle} {select} />
