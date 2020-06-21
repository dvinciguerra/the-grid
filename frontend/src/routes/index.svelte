<script>
  import Rooms from '../components/Rooms.svelte';

	export let name;
</script>

<style>
	section#main-container {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
    margin-left: 300px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>

<section id="main-container">
  <Rooms />
</section>

