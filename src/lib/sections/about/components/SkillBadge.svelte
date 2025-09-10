<script lang="ts">
	export let name: String;
</script>

<div
	class="flex items-start space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-lg transition hover:bg-white/20"
>
	<svg class="h-6 w-6 flex-shrink-0 text-purple-200" fill="currentColor" viewBox="0 0 24 24"
		><path d="M5 13l4 4L19 7" /></svg
	>
	<span class="text-white/80">{name}</span>
</div>
