/* globals feather:false */
"use strict";

feather.replace();
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world"
  }
});

export default app;