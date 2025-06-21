// Language configuration
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    flag: '🇺🇸'
  },
  ta: {
    code: 'ta',
    name: 'தமிழ்',
    dir: 'ltr',
    flag: '🇱🇰'
  },
  si: {
    code: 'si',
    name: 'සිංහල',
    dir: 'ltr',
    flag: '🇱🇰'
  }
};

export const defaultLang = 'en';

// Get current language from URL or default
export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}

// Load content for specific language and page
export async function loadContent(lang, page) {
  try {
    const content = await import(`../content/i18n/${lang}/${page}.json`);
    return content.default;
  } catch (error) {
    console.warn(`Content not found for ${lang}/${page}, falling back to English`);
    try {
      const fallbackContent = await import(`../content/i18n/en/${page}.json`);
      return fallbackContent.default;
    } catch (fallbackError) {
      console.error(`Fallback content not found for ${page}`);
      return {};
    }
  }
}

// Generate URLs for language switching
export function getLocalizedUrl(url, targetLang) {
  const currentLang = getLangFromUrl(url);
  const pathWithoutLang = url.pathname.replace(`/${currentLang}`, '') || '/';

  if (targetLang === defaultLang) {
    return pathWithoutLang;
  }

  return `/${targetLang}${pathWithoutLang}`;
}

// Get language-specific page paths
export function getLocalizedPaths() {
  const pages = ['', 'about', 'departments', 'membership', 'publications', 'gallery', 'events'];
  const paths = [];

  for (const lang of Object.keys(languages)) {
    for (const page of pages) {
      if (lang === defaultLang) {
        paths.push({
          params: {
            lang: undefined
          },
          props: {
            lang,
            page: page || 'index'
          }
        });
        if (page) {
          paths.push({
            params: {
              page
            },
            props: {
              lang,
              page
            }
          });
        }
      } else {
        const path = page ? `${lang}/${page}` : lang;
        paths.push({
          params: {
            lang,
            page: page || undefined
          },
          props: {
            lang,
            page: page || 'index'
          }
        });
      }
    }
  }

  return paths;
}

// Translation helper function
export function t(translations, key, fallback = key) {
  return translations[key] || fallback;
}

// Format date according to language
export function formatDate(date, lang) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const locales = {
    en: 'en-US',
    ta: 'ta-IN',
    si: 'si-LK'
  };

  return new Date(date).toLocaleDateString(locales[lang] || locales.en, options);
}

// Get direction for language (for future RTL support if needed)
export function getDirection(lang) {
  return languages[lang]?.dir || 'ltr';
}

// Navigation items with translations
export function getNavigation(lang) {
  const nav = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Departments', href: '/departments' },
      { name: 'Membership', href: '/membership' },
      { name: 'Publications', href: '/publications' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Events', href: '/events' }
    ],
    ta: [
      { name: 'முகப்பு', href: '/ta' },
      { name: 'எங்களைப் பற்றி', href: '/ta/about' },
      { name: 'துறைகள்', href: '/ta/departments' },
      { name: 'உறுப்பினர்', href: '/ta/membership' },
      { name: 'வெளியீடுகள்', href: '/ta/publications' },
      { name: 'படங்கள்', href: '/ta/gallery' },
      { name: 'நிகழ்வுகள்', href: '/ta/events' }
    ],
    si: [
      { name: 'මුල් පිටුව', href: '/si' },
      { name: 'අප ගැන', href: '/si/about' },
      { name: 'දෙපාර්තමේන්තු', href: '/si/departments' },
      { name: 'සාමාජිකත්වය', href: '/si/membership' },
      { name: 'ප්‍රකාශන', href: '/si/publications' },
      { name: 'ගැලරිය', href: '/si/gallery' },
      { name: 'සිදුවීම්', href: '/si/events' }
    ]
  };

  return nav[lang] || nav.en;
}
