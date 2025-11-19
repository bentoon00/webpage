<script lang="ts">
	import '7.css'; 
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Ben Toon</title>
</svelte:head>

{@render children()}
