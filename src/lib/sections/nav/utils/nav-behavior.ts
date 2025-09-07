import type { SectionType } from '$lib/stores/navigation';
import { writable, type Writable } from 'svelte/store';

interface Props {
	activeSection: Writable<SectionType | null>;
	sectionItems: Record<SectionType, string>;
}

// Fungsi untuk mendeteksi section yang sedang terlihat di viewport
export function setupScrollSpy({ activeSection, sectionItems }: Props) {
	const sections = Object.keys(sectionItems) as SectionType[];

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection.set(entry.target.id as SectionType);
				}
			});
		},
		{ threshold: 0.5 }
	);

	// Observasi semua section
	sections.forEach((section) => {
		const element = document.getElementById(section);
		if (element) {
			observer.observe(element);
		}
	});

	return () => {
		sections.forEach((section) => {
			const element = document.getElementById(section);
			if (element) {
				observer.unobserve(element);
			}
		});
	};
}

// fungsi smooth scroll
export function scrollToSection(section: SectionType) {
	const el = document.getElementById(section);
	if (el) {
		const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset kalau ada navbar fixed
		window.scrollTo({ top: y, behavior: 'smooth' });
	}
}

export const isMenuOpen = writable(false);
export const isScrolled = writable(false);

export function setupMenuBehavior() {
	const toggleMenu = () => {
		console.log('tesss');
		isMenuOpen.update((v) => !v);
	};

	const closeMenu = () => {
		isMenuOpen.set(false);
	};

	const handleScroll = () => {
		isScrolled.set(window.scrollY > 20);
	};

	window.addEventListener('scroll', handleScroll);

	return {
		toggleMenu,
		closeMenu,
		destroy: () => {
			window.removeEventListener('scroll', handleScroll);
		}
	};
}
