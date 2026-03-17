// ─────────────────────────────────────────────────────────────────────────────
// i18n utility — single source of truth for language configuration and helpers.
// UI strings live in src/content/i18n/{lang}/ui.json (loaded via loadContent).
// ─────────────────────────────────────────────────────────────────────────────

export type SupportedLang = 'ta' | 'en' | 'si';

export interface LanguageConfig {
  code: SupportedLang;
  name: string;
  dir: 'ltr' | 'rtl';
  flag: string;
}

// ── Language configuration ────────────────────────────────────────────────────

export const languages: Record<SupportedLang, LanguageConfig> = {
  ta: { code: 'ta', name: 'தமிழ்',   dir: 'ltr', flag: '🇱🇰' },
  en: { code: 'en', name: 'English',  dir: 'ltr', flag: '🇬🇧' },
  si: { code: 'si', name: 'සිංහල',   dir: 'ltr', flag: '🇱🇰' },
};

/** Default / primary language — change this single value to reconfigure. */
export const defaultLang: SupportedLang = 'ta';

export const supportedLangs: SupportedLang[] = ['ta', 'en', 'si'];

// ── Content loading ──────────────────────────────────────────────────────────

/**
 * Load a JSON content file for a given language and page.
 * Falls back to the default language, then to an empty object.
 *
 * Usage:  const data = await loadContent('ta', 'home');
 */
export async function loadContent(
  lang: string,
  page: string,
): Promise<Record<string, unknown>> {
  // Normalise to a supported lang code (fall back to defaultLang)
  const safeLang: SupportedLang = supportedLangs.includes(lang as SupportedLang)
    ? (lang as SupportedLang)
    : defaultLang;

  try {
    const mod = await import(`../content/i18n/${safeLang}/${page}.json`);
    return mod.default as Record<string, unknown>;
  } catch {
    // Fall back to default language
    if (safeLang !== defaultLang) {
      try {
        const fallback = await import(`../content/i18n/${defaultLang}/${page}.json`);
        return fallback.default as Record<string, unknown>;
      } catch {
        /* intentional */
      }
    }
    // Final fallback: English
    if (safeLang !== 'en' && defaultLang !== 'en') {
      try {
        const en = await import(`../content/i18n/en/${page}.json`);
        return en.default as Record<string, unknown>;
      } catch {
        /* intentional */
      }
    }
    return {};
  }
}

// ── UI string helpers ─────────────────────────────────────────────────────────

/**
 * Resolve a dot-notation key (e.g. "footer.quick_links") from a ui.json object.
 * Returns the fallback string if the key is not found.
 */
export function t(ui: Record<string, unknown>, key: string, fallback = key): string {
  const parts = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = ui;
  for (const part of parts) {
    if (node == null || typeof node !== 'object') return fallback;
    node = node[part];
  }
  return typeof node === 'string' ? node : fallback;
}

/**
 * Convenience: load ui.json for a language and return a bound translator.
 *
 * Usage in an Astro page:
 *   const { ui, t } = await loadUi('ta');
 *   t('footer.quick_links')  // → 'விரைவு இணைப்புகள்'
 */
export async function loadUi(lang: string): Promise<{
  ui: Record<string, unknown>;
  t: (key: string, fallback?: string) => string;
}> {
  const ui = await loadContent(lang, 'ui');
  return {
    ui,
    t: (key: string, fallback = key) => t(ui, key, fallback),
  };
}

/**
 * Resolve a blog post category label from the ui.json categories section.
 */
export function getCategoryLabel(
  ui: Record<string, unknown>,
  category: string,
): string {
  const categories = (ui as Record<string, Record<string, string>>)['categories'];
  return categories?.[category] ?? category;
}

// ── URL helpers ───────────────────────────────────────────────────────────────

/**
 * Detect the current language from the URL pathname.
 * e.g. /ta/about → 'ta', /en/ → 'en', / → defaultLang
 */
export function getLangFromUrl(url: URL): SupportedLang {
  const [, segment] = url.pathname.split('/');
  if (supportedLangs.includes(segment as SupportedLang)) {
    return segment as SupportedLang;
  }
  return defaultLang;
}

/**
 * Build a URL for a given lang + relative path, respecting the base path.
 *
 * getUrlWithBase('about', 'ta')  → '/ta/about'
 * getUrlWithBase('', 'en')       → '/en'
 */
export function getUrlWithBase(href: string, lang?: string): string {
  const safeLang = lang && supportedLangs.includes(lang as SupportedLang)
    ? lang
    : defaultLang;

  // Strip leading slash
  const clean = href.startsWith('/') ? href.slice(1) : href;

  return clean ? `/${safeLang}/${clean}` : `/${safeLang}`;
}

/**
 * Return the equivalent URL for a different language, preserving the path.
 */
export function getLocalizedUrl(url: URL, targetLang: string): string {
  let pathname = url.pathname;

  // Remove trailing slash
  if (pathname.endsWith('/') && pathname !== '/') {
    pathname = pathname.slice(0, -1);
  }

  const parts = pathname.split('/').filter(Boolean);

  // Strip leading lang segment if present
  if (parts.length > 0 && supportedLangs.includes(parts[0] as SupportedLang)) {
    parts.shift();
  }

  const cleanPath = parts.length > 0 ? `/${parts.join('/')}` : '';
  return getUrlWithBase(cleanPath, targetLang);
}

// ── Language metadata ─────────────────────────────────────────────────────────

export function getDirection(lang: string): 'ltr' | 'rtl' {
  return languages[lang as SupportedLang]?.dir ?? 'ltr';
}

// ── Date formatting ───────────────────────────────────────────────────────────

const localeMap: Record<SupportedLang, string> = {
  en: 'en-GB',
  ta: 'ta-IN',
  si: 'si-LK',
};

export function formatDate(
  date: string | Date,
  lang: string,
  options?: Intl.DateTimeFormatOptions,
): string {
  const locale = localeMap[lang as SupportedLang] ?? localeMap[defaultLang];
  const fmt = options ?? { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(locale, fmt);
}
