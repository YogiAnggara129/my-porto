<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { PortfolioItem } from '$lib/stores/portfolio';

	export let item: PortfolioItem;
</script>

<div
	class="bg-opacity-20 ring-opacity-20 border-opacity-20 relative overflow-hidden rounded-2xl border border-white bg-white/30 p-6 ring-1 ring-white drop-shadow-2xl backdrop-blur-3xl backdrop-filter"
	data-aos="zoom-in"
	data-aos-delay="300"
>
	<div class="bg-opacity-10 absolute inset-0 z-0 bg-white/30 backdrop-blur-xl"></div>
	<img
		src={item.image}
		alt={item.title}
		class="relative z-10 mb-4 h-64 w-full rounded-lg object-cover"
	/>
	<h3 class="relative z-10 text-2xl font-semibold text-white" data-i18n="proj2_title">
		{item.title}
	</h3>
	<p class="relative z-10 mt-2 text-white" data-i18n="proj1_desc">
		{item.content}
	</p>
	<a
		href={item.url}
		target="_blank"
		class="relative z-10 mt-4 inline-block text-purple-200 hover:underline"
		data-i18n="proj1_link">{m.portfolio__go_to_detail()}</a
	>
</div>
