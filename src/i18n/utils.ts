import { ui, defaultLang, type Lang } from './ui';

export type { Lang };

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
		return ((ui[lang] as Record<string, string>)[key as string] ??
			(ui[defaultLang] as Record<string, string>)[key as string]) as string;
	};
}

/**
 * Given the current locale and pathname, returns the URL for the alternate language.
 * Works with Astro's prefixDefaultLocale: false routing:
 *   - English pages live at /  and /contact
 *   - Arabic  pages live at /ar/ and /ar/contact
 */
export function getAlternateUrl(currentLang: Lang, pathname: string): string {
	if (currentLang === 'ar') {
		// Strip the /ar prefix to get the English URL
		const stripped = pathname.replace(/^\/ar\/?/, '/');
		return stripped === '' ? '/' : stripped;
	} else {
		// Prepend /ar to get the Arabic URL
		return '/ar' + (pathname === '/' ? '/' : pathname);
	}
}
