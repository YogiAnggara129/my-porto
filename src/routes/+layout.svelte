<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { afterNavigate } from '$app/navigation';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';

	let { children } = $props();

	afterNavigate(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	onMount(() => {
		AOS.init({
			duration: 800,
			once: true,
			offset: 100
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-gradient-to-br from-purple-500 via-blue-400 to-green-300" data-lang="id">
	{@render children?.()}
</div>
