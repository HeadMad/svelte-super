// Reexport your entry components here
import Super from './super.svelte'; 
import SuperControl from './super-control.svelte'; 
import SuperContent from './super-content.svelte';

export {
  Super,
  SuperControl,
  SuperContent
};

Super.Control = SuperControl;
Super.Content = SuperContent;

export default Super;