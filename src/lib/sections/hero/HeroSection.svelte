<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { SectionType } from '$lib/stores/navigation';
	import { scrollToSection } from '../nav/utils/nav-behavior';

	const sectionType: SectionType = 'home';
	const contactSection: SectionType = 'contact';
</script>

<!-- Hero Section -->
<section id={sectionType} class="relative z-10 flex min-h-screen items-center justify-center px-6">
	<div class="relative w-full max-w-4xl">
		<div
			class="relative overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-14 drop-shadow-xl backdrop-blur-2xl"
		>
			<div class="absolute inset-0 bg-white/5"></div>
			<div class="relative flex flex-col items-center gap-8 md:flex-row">
				<div class="z-10 text-center md:w-1/2 md:text-left" data-aos="fade-right">
					<h1 class="text-5xl font-extrabold text-white md:text-6xl" data-i18n="hero_title">
						{m.hero__hello()}<br /><span class="text-purple-200">Yogi Anggara</span>
					</h1>
					<p class="mt-4 text-white opacity-90" data-i18n="hero_subtitle">
						Mobile | Frontend | Backend | Machine Learning
					</p>
					<div class="mt-6 flex justify-center space-x-4 md:justify-start">
						<button
							onclick={() => scrollToSection(contactSection)}
							class="rounded-lg bg-purple-200/30 px-6 py-3 text-white hover:bg-purple-200/50"
							>{m.contact__title()}</button
						>
						<a
							href="https://docs.google.com/document/d/10t6gWwxW89i5eCzFBttycsufMOBY9WG7ryTPqQndETY/edit?usp=sharing"
							target="_blank"
							class="rounded-lg border border-white px-6 py-3 text-white hover:bg-white hover:text-purple-700"
							>{m.hero__download_cv()}</a
						>
					</div>
				</div>
				<div class="z-10 flex justify-center md:w-1/2" data-aos="fade-left">
					<div class="relative h-64 w-64">
						<div class="bg-opacity-10 absolute inset-0 rounded-full bg-white/30"></div>
						<img
							src="images/profile.jpeg"
							alt="Yogi Anggara"
							class="relative h-full w-full rounded-full border-2 border-white/25 object-cover drop-shadow-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
