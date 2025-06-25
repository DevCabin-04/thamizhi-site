import type {
  Languages,
  LanguageInfo,
  SiteConfig,
  HomeContent,
  AboutContent,
  DepartmentsContent,
  MembershipContent,
  PublicationsContent,
  GalleryContent,
  EventsContent,
  NavigationItem,
} from "../types/content";

// Language configuration
export const languages: Languages = {
  en: {
    code: "en",
    name: "English",
    dir: "ltr",
    flag: "🇺🇸",
  },
  ta: {
    code: "ta",
    name: "தமிழ்",
    dir: "ltr",
    flag: "🇱🇰",
  },
  si: {
    code: "si",
    name: "සිංහල",
    dir: "ltr",
    flag: "🇱🇰",
  },
};

export const defaultLang = "en";

// Type for supported language codes
export type SupportedLang = keyof typeof languages;

// Type for content pages
export type ContentPage =
  | "home"
  | "about"
  | "departments"
  | "membership"
  | "publications"
  | "gallery"
  | "events"
  | "site_config";

// Type mapping for content interfaces
type ContentTypeMap = {
  home: HomeContent;
  about: AboutContent;
  departments: DepartmentsContent;
  membership: MembershipContent;
  publications: PublicationsContent;
  gallery: GalleryContent;
  events: EventsContent;
  site_config: SiteConfig;
};

// Get current language from URL or default
export function getLangFromUrl(url: URL): SupportedLang {
  const [, lang] = url.pathname.split("/");
  if (lang && typeof lang === "string" && lang in languages)
    return lang as SupportedLang;
  return defaultLang;
}

// Load content for specific language and page with proper typing
export async function loadContent<T extends ContentPage>(
  lang: SupportedLang,
  page: T,
): Promise<ContentTypeMap[T] | null> {
  try {
    const content = await import(`../content/i18n/${lang}/${page}.json`);
    return (content.default as ContentTypeMap[T]) || null;
  } catch (error) {
    console.warn(
      `Content not found for ${lang}/${page}, falling back to English`,
    );
    if (lang !== "en") {
      try {
        const fallbackContent = await import(`../content/i18n/en/${page}.json`);
        return (fallbackContent.default as ContentTypeMap[T]) || null;
      } catch (fallbackError) {
        console.error(`Fallback content not found for ${page}`);
      }
    }
    return null;
  }
}

// Load content with defensive error handling
export async function loadContentSafe<T extends ContentPage>(
  lang: SupportedLang,
  page: T,
): Promise<Partial<ContentTypeMap[T]>> {
  const content = await loadContent(lang, page);
  return content || ({} as Partial<ContentTypeMap[T]>);
}

// Generate URLs for language switching
export function getLocalizedUrl(url: URL, targetLang: SupportedLang): string {
  if (!url || !targetLang) return "/";

  const currentLang = getLangFromUrl(url);
  let pathWithoutLang = url.pathname;

  // Remove current language prefix if it exists
  if (currentLang && currentLang !== defaultLang) {
    pathWithoutLang = pathWithoutLang.replace(`/${currentLang}`, "") || "/";
  }

  // Add target language prefix if it's not the default
  if (targetLang === defaultLang) {
    return pathWithoutLang;
  }

  return `/${targetLang}${pathWithoutLang}`;
}

// Interface for path parameters
export interface LocalizedPathParams {
  lang?: string;
  page?: string;
}

export interface LocalizedPathProps {
  lang: SupportedLang;
  page: string;
}

export interface LocalizedPath {
  params: LocalizedPathParams;
  props: LocalizedPathProps;
}

// Get language-specific page paths
export function getLocalizedPaths(): LocalizedPath[] {
  const pages = [
    "",
    "about",
    "departments",
    "membership",
    "publications",
    "gallery",
    "events",
  ];
  const paths: LocalizedPath[] = [];

  for (const lang of Object.keys(languages) as SupportedLang[]) {
    for (const page of pages) {
      if (lang === defaultLang) {
        if (page) {
          paths.push({
            params: { page },
            props: { lang, page },
          });
        } else {
          paths.push({
            params: {},
            props: { lang, page: "index" },
          });
        }
      } else {
        paths.push({
          params: { lang: lang as string, page: page || undefined },
          props: { lang, page: page || "index" },
        });
      }
    }
  }

  return paths;
}

// Translation helper function with proper typing
export function t(
  translations: Record<string, string>,
  key: string,
  fallback: string = key,
): string {
  return translations?.[key] || fallback;
}

// Format date according to language
export function formatDate(date: string | Date, lang: SupportedLang): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const locales: Record<SupportedLang, string> = {
    en: "en-US",
    ta: "ta-IN",
    si: "si-LK",
  };

  return new Date(date).toLocaleDateString(
    locales[lang] || locales.en,
    options,
  );
}

// Get direction for language (for future RTL support if needed)
export function getDirection(lang: SupportedLang): "ltr" | "rtl" {
  if (!lang || !(lang in languages)) {
    return "ltr";
  }
  return languages[lang].dir || "ltr";
}

// Navigation items with translations
export function getNavigation(lang: SupportedLang): NavigationItem[] {
  const nav: Record<SupportedLang, NavigationItem[]> = {
    en: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Departments", href: "/departments" },
      { name: "Membership", href: "/membership" },
      { name: "Publications", href: "/publications" },
      { name: "Gallery", href: "/gallery" },
      { name: "Events", href: "/events" },
    ],
    ta: [
      { name: "முகப்பு", href: "/ta" },
      { name: "எங்களைப் பற்றி", href: "/ta/about" },
      { name: "துறைகள்", href: "/ta/departments" },
      { name: "உறுப்பினர்", href: "/ta/membership" },
      { name: "வெளியீடுகள்", href: "/ta/publications" },
      { name: "படங்கள்", href: "/ta/gallery" },
      { name: "நிகழ்வுகள்", href: "/ta/events" },
    ],
    si: [
      { name: "මුල් පිටුව", href: "/si" },
      { name: "අප ගැන", href: "/si/about" },
      { name: "දෙපාර්තමේන්තු", href: "/si/departments" },
      { name: "සාමාජිකත්වය", href: "/si/membership" },
      { name: "ප්‍රකාශන", href: "/si/publications" },
      { name: "ගැලරිය", href: "/si/gallery" },
      { name: "සිදුවීම්", href: "/si/events" },
    ],
  };

  if (!lang || !(lang in nav)) {
    return nav.en;
  }
  return nav[lang];
}

// Utility function to check if a language is supported
export function isSupportedLang(lang: string | number): lang is SupportedLang {
  return typeof lang === "string" && lang in languages;
}

// Get language info by code
export function getLanguageInfo(lang: SupportedLang): LanguageInfo {
  return languages[lang];
}

// Get all supported language codes
export function getSupportedLangs(): SupportedLang[] {
  return Object.keys(languages) as SupportedLang[];
}

// Validate and sanitize language code
export function validateLang(lang: string | undefined): SupportedLang {
  if (!lang || !isSupportedLang(lang)) {
    return defaultLang;
  }
  return lang;
}
