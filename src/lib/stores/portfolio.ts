import { getLocale, type Locale } from '$lib/paraglide/runtime';
import { derived } from 'svelte/store';
import { locale } from './locale';

interface PortfolioItemRaw {
	title: Record<Locale, string>;
	content: Record<Locale, string>;
	image: string;
	url?: string;
}

export interface PortfolioItem {
	title: string;
	content: string;
	image: string;
	url?: string;
}

const portfolioItemRaws: PortfolioItemRaw[] = [
	{
		title: {
			en: 'HKI Apps',
			id: 'HKI Apps'
		},
		content: {
			en: 'Developed a mobile ERP app covering attendance, document disposition, leave requests, project field reporting, and quality control for an infrastructure company. Supports both administrative and technical operations to streamline workflows.',
			id: 'Mengembangkan aplikasi ERP seluler yang mencakup absensi, penanganan dokumen, pengajuan cuti, pelaporan proyek lapangan, dan kontrol kualitas untuk sebuah perusahaan infrastruktur. Mendukung operasional administratif dan teknis untuk menyederhanakan alur kerja.'
		},
		image:
			'https://play-lh.googleusercontent.com/48_qSFJtbwjzRR06VOoH7jYTDXh1VzOVSo-rGf8sDeqgmKih1B_OcFPKRq8hEpHw2gE=w5120-h2880-rw',
		url: 'https://play.google.com/store/apps/details?id=com.hkinfrastruktur.app&hl=id'
	},
	{
		title: {
			en: 'Sys Matrica',
			id: 'Sys Matrica'
		},
		content: {
			en: 'Developed an internal mobile application for PT. Matrica Consulting Service to streamline employee activities, enhancing operational efficiency and facilitating daily workflows.',
			id: 'Developed an internal mobile application for PT. Matrica Consulting Service to streamline employee activities, enhancing operational efficiency and facilitating daily workflows.'
		},
		image:
			'https://play-lh.googleusercontent.com/sRpiNp8Y9dYIkILF8T-zJCpoJMMnGe2nAjRQEw9IOYRboLtjfEJKrIIuMomA0PdFvDk=w5120-h2880-rw',
		url: 'https://play.google.com/store/apps/details?id=com.sysmatrica.app&hl=id'
	},
	{
		title: {
			en: 'BadminTop',
			id: 'BadminTop'
		},
		content: {
			en: 'Developed a mobile app for easy badminton court reservations, allowing users to check availability and book courts seamlessly. Designed to simplify the court booking experience.',
			id: 'Developed a mobile app for easy badminton court reservations, allowing users to check availability and book courts seamlessly. Designed to simplify the court booking experience.'
		},
		image:
			'https://user-images.githubusercontent.com/76767053/165685998-f523556b-7f11-4873-9173-272990a1a8dd.png',
		url: 'https://github.com/YogiAnggara129/badmintop'
	},
	{
		title: {
			en: 'Notification Engine for Banking',
			id: 'Notification Engine untuk Perbankan'
		},
		content: {
			en: 'Maintained and enhanced a notification engine handling SMS and email delivery, involving Kafka messaging, Oracle database operations, and Spring Boot services. Focused on solving migration issues, optimizing performance, and debugging complex production errors.',
			id: 'Maintained and enhanced a notification engine handling SMS and email delivery, involving Kafka messaging, Oracle database operations, and Spring Boot services. Focused on solving migration issues, optimizing performance, and debugging complex production errors.'
		},
		image:
			'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5834437/cover_image/regular_1708x683/Untitled-2b3a5d6414ec7f1635c0e730f62bc92b.png'
	}
];

export const portfolioItems = derived(locale, ($locale): PortfolioItem[] =>
	portfolioItemRaws.map((it) => ({
		...it,
		title: it.title[$locale as Locale],
		content: it.content[$locale as Locale]
	}))
);
