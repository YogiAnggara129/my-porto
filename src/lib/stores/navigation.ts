import { writable } from 'svelte/store';

export type SectionType = 'home' | 'about' | 'portfolio';
export const activeSection = writable<SectionType | null>(null);
