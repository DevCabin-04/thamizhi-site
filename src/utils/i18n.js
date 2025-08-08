// Language configuration

import {client} from '../../tina/__generated__/client';
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

export const supportedLangs = ["en", "ta", "si"];

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

export async function loadTina(lang, page) {
  try {
    let pageResponse;
    const queryKey = `${page}_${lang}`;
    
    console.log(`Loading TinaCMS data for: ${queryKey}`);
    
    // Check if the query exists in the client
    if (!client.queries[queryKey]) {
      console.warn(`Query ${queryKey} not found in client.queries`);
      throw new Error(`Query ${queryKey} not found`);
    }
    
    pageResponse = await client.queries[queryKey]({
      relativePath: `${page}.json`
    });
    
    console.log(`Successfully loaded TinaCMS data for: ${queryKey}`, pageResponse);
    
    // Return the complete TinaCMS response structure
    return {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    };
    
  } catch (error) {
    console.error(`TinaCMS content not found for ${lang}/${page}:`, error);
    
    // Try fallback to English if not already English
    if (lang !== 'en') {
      try {
        const fallbackQueryKey = `${page}_en`;
        console.log(`Trying fallback query: ${fallbackQueryKey}`);
        
        if (client.queries[fallbackQueryKey]) {
          const fallbackResponse = await client.queries[fallbackQueryKey]({
            relativePath: `${page}.json`
          });
          
          console.log(`Fallback successful for: ${fallbackQueryKey}`);
          
          return {
            data: fallbackResponse.data,
            query: fallbackResponse.query,
            variables: fallbackResponse.variables,
          };
        }
      } catch (fallbackError) {
        console.error(`Fallback query also failed:`, fallbackError);
      }
    }
    
    // Return empty structure that matches TinaCMS format with correct page type
    const emptyData = {};
    emptyData[`${page}_${lang}`] = {};
    
    return {
      data: emptyData,
      query: '',
      variables: { relativePath: `${page}.json` },
    };
  }
}

// Generate URLs for language switching
export function getLocalizedUrl(url, targetLang) {
  const currentLang = getLangFromUrl(url);
  let pathname = url.pathname;
  const basePath = getBasePath();
  
  // Remove base path if it exists (for production)
  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.substring(basePath.length);
  }
  
  // Ensure pathname starts with /
  if (!pathname.startsWith('/')) {
    pathname = '/' + pathname;
  }
  
  // Remove trailing slash if present
  if (pathname.endsWith('/') && pathname !== '/') {
    pathname = pathname.slice(0, -1);
  }
  
  // Split path and filter empty parts
  const pathParts = pathname.split('/').filter(part => part);
  
  // Check if first part is a language code and remove it
  if (pathParts.length > 0 && Object.keys(languages).includes(pathParts[0])) {
    pathParts.shift(); // Remove language code
  }
  
  // Get the clean path
  const cleanPath = pathParts.length > 0 ? `/${pathParts.join('/')}` : '';
  
  // Return the localized URL using the shared utility
  return getUrlWithBase(cleanPath, targetLang);
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

// Shared utility for base path handling
export function getBasePath() {
  const isDev = import.meta.env.NODE_ENV !== 'production';
  return isDev ? '' : '/thamizhi-site';
}

// Helper function to construct URLs with base path
export function getUrlWithBase(href, lang = null) {
  const basePath = getBasePath();
  
  if (!href || href === '') {
    // Handle home page
    return lang === 'en' || lang === null ? basePath || '/' : `${basePath}/${lang}`;
  }
  
  // Ensure href starts with / if it's not empty
  if (!href.startsWith('/')) {
    href = '/' + href;
  }
  
  // Handle other pages
  if (lang === 'en' || lang === null) {
    return `${basePath}${href}`;
  } else {
    return `${basePath}/${lang}${href}`;
  }
}

// Navigation items with translations
