<script>
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from './components/Navbar.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";

  export let url = "";
  export let name = "";
</script>

<style>
  main {
    padding-top: 50px;
    padding-bottom: 50px;
  }
</style>

<Router url="{url}">
  <Navbar />

  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">


        <Route path="/"><Home name={name} /></Route>
        <Route path="/about"><About /></Route>
      </main>
    </div>
  </div>

</Router>