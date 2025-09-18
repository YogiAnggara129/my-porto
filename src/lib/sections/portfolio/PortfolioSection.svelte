<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { SectionType } from '$lib/stores/navigation';
	import { portfolioItems } from '$lib/stores/portfolio';
	import PortfolioCard from './components/PortfolioCard.svelte';

	const sectionType: SectionType = 'portfolio';
</script>

<section id={sectionType} class="px-6 py-20" data-aos="fade-up" data-aos-delay="200">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-12 text-center text-4xl font-bold text-white" data-i18n="portfolio_title">
			{m.portfolio__title()}
		</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each $portfolioItems as item}
				<PortfolioCard {item} />
			{/each}
		</div>
	</div>
	<!-- Lihat Selengkapnya Button -->
	<div class="mt-12 text-center" data-aos="fade-down">
		<a
			href="https://www.linkedin.com/in/yogi-anggara/"
			class="bg-opacity-75 hover:bg-opacity-100 inline-block rounded-full bg-purple-500 px-8 py-3 font-semibold text-white transition"
		>
			{m.portfolio__see_more()}
		</a>
	</div>
</section>
