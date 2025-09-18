<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { experienceItems } from '$lib/stores/experience';
	import type { SectionType } from '$lib/stores/navigation';
	import ExperienceTimelineItem from './components/ExperienceTimelineItem.svelte';

	const sectionType: SectionType = 'experience';
</script>

<section id={sectionType} class="bg-slate-700 pt-36 pb-32" data-aos="fade-up">
	<div class="container mx-auto px-6">
		<!-- Header -->
		<div class="mx-auto mb-16 max-w-xl text-center" data-aos="fade-down" data-aos-delay="100">
			<h4 class="mb-2 text-lg font-semibold text-purple-200">{m.experience__title()}</h4>
			<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
				{m.experience__subtitle()}
			</h2>
			<p class="text-md font-medium text-gray-400 md:text-lg">
				{m.experience__content()}
			</p>
		</div>
		<!-- Timeline List -->
		<ol class="relative">
			{#each $experienceItems as item}
				<ExperienceTimelineItem {item} />
			{/each}
		</ol>
	</div>
	<!-- Lihat Selengkapnya Button -->
	<div class="mt-12 text-center" data-aos="fade-down">
		<a
			href="https://www.linkedin.com/in/yogi-anggara/"
			class="bg-opacity-75 hover:bg-opacity-100 inline-block rounded-full bg-purple-500 px-8 py-3 font-semibold text-white transition"
		>
			See More
		</a>
	</div>
</section>
