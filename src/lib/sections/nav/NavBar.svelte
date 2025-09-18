<script lang="ts">
	import { getLocale, setLocale } from '$lib/stores/locale';
	import { m } from '$lib/paraglide/messages.js';
	import { activeSection } from '$lib/stores/navigation';
	import type { SectionType } from '$lib/stores/navigation';
	import { onMount } from 'svelte';
	import {
		isMenuOpen,
		scrollToSection,
		setupMenuBehavior,
		setupScrollSpy
	} from './utils/nav-behavior';

	export const sectionItems: Record<SectionType, string> = {
		home: m.nav__home(),
		about: m.nav__about(),
		portfolio: m.nav__portfolio(),
		webinar: m.nav__webinars(),
		experience: m.nav__experience(),
		contact: m.nav__contact()
	};

	let menu: ReturnType<typeof setupMenuBehavior>;

	onMount(() => {
		setupScrollSpy({ activeSection, sectionItems });

		const cleanupScrollSpy = setupScrollSpy({ activeSection, sectionItems });
		menu = setupMenuBehavior();

		return () => {
			cleanupScrollSpy();
			menu.destroy();
		};
	});
</script>

<nav
	id="navbar"
	class="bg-opacity-0 md:backdrop-blur-25 fixed top-0 left-0 z-30 w-full bg-white/20 backdrop-blur-md backdrop-filter transition-all duration-300"
>
	<!-- <nav id="navbar" class="rounded-lg bg-white/20 p-6 backdrop-blur-lg"> -->
	<div class="container mx-auto flex items-center justify-between px-8 py-4">
		<!-- Logo -->
		<div class="text-2xl font-bold text-white">Yogi Anggara</div>
		<!-- Menu Links -->
		<ul
			id="menu"
			class="absolute top-20 right-8 left-8 scale-95 transform flex-col space-y-4 rounded-lg
              border border-white/25 bg-white/20 p-6 text-white opacity-0 transition-all duration-300 ease-in-out
              md:static md:flex md:scale-100 md:flex-row md:space-y-0 md:space-x-8 md:border-none md:bg-transparent md:p-0 md:opacity-100
              {$isMenuOpen ? 'scale-100 opacity-100' : 'hidden'}"
		>
			{#each Object.keys(sectionItems) as section}
				<li>
					<button
						onclick={() => scrollToSection(section as SectionType)}
						class="relative cursor-pointer transition-colors duration-300 hover:text-gray-200
							{$activeSection === section
							? "font-semibold after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-white/20 after:content-['']"
							: ''}"
					>
						{sectionItems[section as SectionType]}
					</button>
				</li>
			{/each}
		</ul>
		<!-- Right Controls -->
		<div class="flex items-center space-x-4">
			<button
				id="lang-toggle"
				class="bg-opacity-30 hover:bg-opacity-50 rounded-lg bg-white/20 px-4 py-2 text-white transition"
				onclick={() => (getLocale() == 'id' ? setLocale('en') : setLocale('id'))}
				>{getLocale() == 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}
			</button>
			<button
				id="menu-btn"
				class="text-white focus:outline-none md:hidden"
				aria-label="Open menu"
				onclick={() => menu.toggleMenu()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</div>
</nav>
