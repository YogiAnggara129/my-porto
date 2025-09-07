import { writable } from 'svelte/store';
import { getLocale, setLocale as paraglideSetLocale, type Locale } from '$lib/paraglide/runtime';

const localeStore = writable(getLocale());

function setLocale(lang: Locale) {
	paraglideSetLocale(lang);
	localeStore.set(lang);
}

export const locale = {
	subscribe: localeStore.subscribe
};

export { getLocale, setLocale };
