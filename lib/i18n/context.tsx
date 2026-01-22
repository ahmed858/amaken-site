"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import {
  type Locale,
  getDictionary,
  getDirection,
  type Dictionary,
  defaultLocale,
} from "./dictionaries";

interface I18nContextType {
  locale: Locale;
  dictionary: Dictionary;
  direction: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = "amaken-locale";

// Get initial locale from localStorage or browser settings
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  // Try to get from localStorage first
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
  if (savedLocale === "en" || savedLocale === "ar") {
    return savedLocale;
  }

  // Fall back to browser language detection
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ar")) {
    return "ar";
  }

  return defaultLocale;
}

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocaleState] = useState<Locale>(
    () => initialLocale || defaultLocale,
  );
  const [dictionary, setDictionary] = useState<Dictionary>(() =>
    getDictionary(locale),
  );

  // Initialize locale on mount
  useEffect(() => {
    setMounted(true);
    const savedLocale = getInitialLocale();
    setLocaleState(savedLocale);
    setDictionary(getDictionary(savedLocale));
    document.documentElement.lang = savedLocale;
    document.documentElement.dir = getDirection(savedLocale);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setDictionary(getDictionary(newLocale));
    document.documentElement.lang = newLocale;
    document.documentElement.dir = getDirection(newLocale);
    // Persist to localStorage
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      let value: unknown = dictionary;
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      return typeof value === "string" ? value : key;
    },
    [dictionary],
  );

  return (
    <I18nContext.Provider
      value={{
        locale,
        dictionary,
        direction: getDirection(locale),
        setLocale,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
