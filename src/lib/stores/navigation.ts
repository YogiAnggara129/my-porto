import { writable } from 'svelte/store';

export type SectionType = 'home' | 'about' | 'portfolio' | 'webinar' | 'experience' | 'contact';
export const activeSection = writable<SectionType | null>(null);
