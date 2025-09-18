<script lang="ts">
	let { href, label, target, children } = $props<{
		href: string;
		label: string;
		target?: string;
		children?: any;
	}>();
</script>

<a
	{href}
	aria-label={label}
	{target}
	class="transform rounded-full bg-white/20 p-3 transition-all duration-300 hover:scale-110 hover:bg-white/30"
>
	{#if children}
		{@render children?.()}
	{:else}
		{label}
	{/if}
</a>
