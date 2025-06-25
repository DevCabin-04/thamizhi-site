// Utility functions for common operations across the Thamizhi website

import type {
  SiteConfig,
  NavigationItem,
  Event,
  Publication,
  Statistic,
  LanguageInfo,
} from "../types/content";

/**
 * Safely access nested object properties
 */
export function safeGet<T>(obj: any, path: string, defaultValue: T): T {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (current == null || typeof current !== "object") {
      return defaultValue;
    }
    current = current[key];
  }

  return current !== undefined ? current : defaultValue;
}

/**
 * Format currency values consistently
 */
export function formatCurrency(
  amount: string | number,
  currency: string = "LKR",
): string {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) return amount.toString();

  const formatters = {
    LKR: (val: number) => `රු. ${val.toLocaleString()}`,
    USD: (val: number) => `$${val.toLocaleString()}`,
    INR: (val: number) => `₹${val.toLocaleString()}`,
  };

  const formatter = formatters[currency as keyof typeof formatters];
  return formatter
    ? formatter(numAmount)
    : `${currency} ${numAmount.toLocaleString()}`;
}

/**
 * Format date strings consistently across languages
 */
export function formatEventDate(dateStr: string, lang: string = "en"): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const locales = {
      en: "en-US",
      ta: "ta-IN",
      si: "si-LK",
    };

    return date.toLocaleDateString(
      locales[lang as keyof typeof locales] || "en-US",
      options,
    );
  } catch (error) {
    console.warn("Error formatting date:", error);
    return dateStr;
  }
}

/**
 * Format time strings consistently
 */
export function formatTime(timeStr: string, lang: string = "en"): string {
  try {
    // Handle various time formats
    const time24Regex = /^(\d{1,2}):(\d{2})$/;
    const time12Regex = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i;

    if (time24Regex.test(timeStr)) {
      const [, hours, minutes] = timeStr.match(time24Regex)!;
      const date = new Date();
      date.setHours(parseInt(hours), parseInt(minutes));

      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: lang === "en",
      };

      return date.toLocaleTimeString(
        lang === "en" ? "en-US" : "en-GB",
        options,
      );
    }

    return timeStr;
  } catch (error) {
    console.warn("Error formatting time:", error);
    return timeStr;
  }
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(
  text: string,
  maxLength: number,
  suffix: string = "...",
): string {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Generate SEO-friendly slugs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Validate email addresses
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone numbers (basic validation)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
  return phoneRegex.test(cleanPhone);
}

/**
 * Filter events by category
 */
export function filterEventsByCategory(
  events: Event[],
  category: string,
): Event[] {
  if (!category || category === "all") return events;
  return events.filter(
    (event) => event.category.toLowerCase() === category.toLowerCase(),
  );
}

/**
 * Sort events by date
 */
export function sortEventsByDate(
  events: Event[],
  ascending: boolean = true,
): Event[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * Filter publications by type
 */
export function filterPublicationsByType(
  publications: Publication[],
  type: string,
): Publication[] {
  if (!type || type === "all") return publications;
  return publications.filter(
    (pub) => pub.type.toLowerCase() === type.toLowerCase(),
  );
}

/**
 * Calculate reading time estimate
 */
export function calculateReadingTime(
  text: string,
  wordsPerMinute: number = 200,
): number {
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generate random ID
 */
export function generateId(prefix: string = ""): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2);
  return prefix
    ? `${prefix}-${timestamp}-${randomStr}`
    : `${timestamp}-${randomStr}`;
}

/**
 * Deep clone objects
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array)
    return obj.map((item) => deepClone(item)) as unknown as T;

  const clonedObj = {} as { [key: string]: any };
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj as T;
}

/**
 * Debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Convert statistics array to object for easier access
 */
export function normalizeStatistics(
  stats: Statistic[],
): Record<string, string> {
  return stats.reduce(
    (acc, stat) => {
      const key = slugify(stat.label);
      acc[key] = stat.number;
      return acc;
    },
    {} as Record<string, string>,
  );
}

/**
 * Check if a date is in the future
 */
export function isFutureDate(dateStr: string): boolean {
  try {
    const date = new Date(dateStr);
    return date.getTime() > Date.now();
  } catch {
    return false;
  }
}

/**
 * Check if a date is today
 */
export function isToday(dateStr: string): boolean {
  try {
    const date = new Date(dateStr);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  } catch {
    return false;
  }
}

/**
 * Get relative time string (e.g., "2 days ago", "in 3 hours")
 */
export function getRelativeTime(dateStr: string, lang: string = "en"): string {
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    const translations = {
      en: {
        today: "Today",
        tomorrow: "Tomorrow",
        yesterday: "Yesterday",
        daysAgo: (n: number) => `${n} day${n === 1 ? "" : "s"} ago`,
        daysFromNow: (n: number) => `In ${n} day${n === 1 ? "" : "s"}`,
      },
      ta: {
        today: "இன்று",
        tomorrow: "நாளை",
        yesterday: "நேற்று",
        daysAgo: (n: number) => `${n} நாட்களுக்கு முன்`,
        daysFromNow: (n: number) => `${n} நாட்களில்`,
      },
      si: {
        today: "අද",
        tomorrow: "හෙට",
        yesterday: "ඊයේ",
        daysAgo: (n: number) => `දින ${n}කට පෙර`,
        daysFromNow: (n: number) => `දින ${n}කින්`,
      },
    };

    const t =
      translations[lang as keyof typeof translations] || translations.en;

    if (diffDays === 0) return t.today;
    if (diffDays === 1) return t.tomorrow;
    if (diffDays === -1) return t.yesterday;
    if (diffDays > 0) return t.daysFromNow(diffDays);
    return t.daysAgo(Math.abs(diffDays));
  } catch {
    return dateStr;
  }
}

/**
 * Validate required fields in an object
 */
export function validateRequired(
  obj: Record<string, any>,
  fields: string[],
): string[] {
  const missing: string[] = [];

  for (const field of fields) {
    if (
      !obj[field] ||
      (typeof obj[field] === "string" && obj[field].trim() === "")
    ) {
      missing.push(field);
    }
  }

  return missing;
}

/**
 * Format file sizes
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/**
 * Create a delay/sleep function
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Safe JSON parse with fallback
 */
export function safeJsonParse<T>(jsonString: string, fallback: T): T {
  try {
    return JSON.parse(jsonString);
  } catch {
    return fallback;
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scroll to element smoothly
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  if (typeof window === "undefined") return;

  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.offsetTop - offset;

  if (prefersReducedMotion()) {
    window.scrollTo(0, elementPosition);
  } else {
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}
