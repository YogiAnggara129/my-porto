<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { SectionType } from '$lib/stores/navigation';
	import SkillBadge from './components/SkillBadge.svelte';

	const sectionType: SectionType = 'about';
</script>

<!-- About Section -->
<section
	id={sectionType}
	class="border-t border-white/20 bg-white/10 px-6 py-20 backdrop-blur-md"
	data-aos="fade-up"
>
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-4 text-4xl font-bold text-white">{m.about__title()}</h2>
		<p class="mb-6 leading-relaxed text-white/90" data-aos="fade-up" data-aos-delay="100">
			{m.about__content()}
		</p>
		<!-- Feature Highlights -->
		<div
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
			data-aos="fade-up"
			data-aos-delay="200"
		>
			<SkillBadge name="Java Spring Boot" />
			<SkillBadge name="Flutter & Dart" />
			<SkillBadge name="JavaScript & Web Development" />
			<SkillBadge name="Microservices Architecture" />
			<SkillBadge name="CI/CD & DevOps Practices" />
		</div>
		<!-- /Feature Highlights -->
	</div>
</section>
