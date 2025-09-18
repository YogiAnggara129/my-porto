import { derived, writable } from 'svelte/store';
import { getLocale, setLocale as paraglideSetLocale, type Locale } from '$lib/paraglide/runtime';
import { id, enUS } from 'date-fns/locale';
import { format } from 'date-fns';

const localeStore = writable(getLocale());

function setLocale(lang: Locale) {
	paraglideSetLocale(lang);
	localeStore.set(lang);
}

export { getLocale, setLocale };

export const locale = {
	subscribe: localeStore.subscribe
};

interface ILocaleValue {
	get(lang: Locale): string;
}

export class TextLocaleValue implements ILocaleValue {
	constructor(private readonly values: Record<Locale, string>) {}

	get(lang: Locale) {
		return this.values[lang];
	}
}

export class DateLocaleValue implements ILocaleValue {
	private readonly result: Record<Locale, string>;

	private constructor(
		private readonly date: Date | 'now',
		private readonly formatStr: string
	) {
		this.result =
			date === 'now'
				? {
						id: 'Sekarang',
						en: 'Now'
					}
				: {
						id: format(date, formatStr, { locale: id }),
						en: format(date, formatStr, { locale: enUS })
					};
	}

	static mmmmYyyy(date: Date) {
		return new DateLocaleValue(date, 'MMMM yyyy');
	}

	static now() {
		return new DateLocaleValue('now', '');
	}

	get(lang: Locale) {
		return this.result[lang];
	}
}

export class UnlocaleValue implements ILocaleValue {
	constructor(private readonly value: string) {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	get(_lang: Locale) {
		return this.value;
	}
}

export type ILocaleItem = Record<string, ILocaleValue | undefined>;

export type IResultLocaleItem<L extends ILocaleItem> = {
	[K in keyof L]: string | undefined;
};

function generateLocaleItem<L extends ILocaleItem, R extends IResultLocaleItem<L>>(
	item: L,
	lang: Locale
) {
	return Object.fromEntries(Object.entries(item).map(([k, v]) => [k, v?.get(lang) ?? ''])) as R;
}

function generateLocalteItems<L extends ILocaleItem, R extends IResultLocaleItem<L>>(
	items: L[],
	lang: Locale
) {
	const result: R[] = [];
	for (let i = 0; i < items.length; i++) {
		const element = items[i];
		const elem2: R = generateLocaleItem<L, R>(element, lang);
		result.push(elem2);
	}
	return result;
}

export function generateLocaleItemsDerived<L extends ILocaleItem, R extends IResultLocaleItem<L>>(
	items: L[]
) {
	return derived(locale, ($locale): R[] => {
		return generateLocalteItems<L, R>(items, $locale);
	});
}
