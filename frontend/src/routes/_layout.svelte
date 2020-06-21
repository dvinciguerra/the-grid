<script>
  import Navbar from '../components/Navbar.svelte';
  import Sidebar from '../components/Sidebar.svelte';

	export let segment;
</script>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
  main {
    padding-top: 50px;
    padding-bottom: 50px;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</svelte:head>

<Navbar />

<main class="container-fluid">
  <div class="row">
    <Sidebar />

    <slot />
  </div>
</main>