<script lang="ts">
	import type { ExperienceItem } from '$lib/stores/experience';

	export let item: ExperienceItem;
</script>

<li class="border-l border-gray-600 pb-10" data-aos="fade-right" data-aos-delay="150">
	<span class="absolute -left-2 mt-1.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-purple-200"
	></span>
	<div class="ml-6 rounded-xl bg-white/10 p-6 backdrop-blur-lg transition hover:bg-white/20">
		<time class="block text-sm text-gray-300">{`${item.startDate} - ${item.endDate}`}</time>
		<h3 class="mt-2 text-xl font-semibold text-white">{item.position}</h3>
		<h4 class="text-base font-semibold text-gray-200">{item.company}</h4>
		<p class="mt-4 text-gray-400">{item.description}</p>
	</div>
</li>
