<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-gradient-to-br from-purple-500 via-blue-400 to-green-300" data-lang="id">
	{@render children?.()}
</div>
