<script>
  import {writable} from 'svelte/store';
  import {setContext} from 'svelte';

  let ids = writable(new Set);
  let active = writable(new Set);

  const createMethod = (handler) => (...items) => active.update(active => {
    items.forEach(item => handler(active, item));
    return items;
  });

  const open = createMethod((active, item) => active.add(item));
  const close = createMethod((active, item) => active.delete(item));
  const toggle = createMethod((active, item) => {
    if (active.has(item))
      active.delete(item);
    else
      active.add(item);
  });
  const select = (...items) => active.set(new Set(items));
  
  setContext('super', {
    ids,
    active,
  });
</script>

<slot {open} {close} {toggle} {select} />