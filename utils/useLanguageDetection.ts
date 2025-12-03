import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SUPPORTED_LOCALES = ['en', 'es', 'ko'];
const LANGUAGE_STORAGE_KEY = 'user-locale-preference';
const LOCALE_DETECTION_KEY = 'locale-auto-detected';

// Map browser language codes to our supported locales
const getLocaleFromBrowser = (): string | null => {
  if (typeof window === 'undefined') return null;

  // Get browser's preferred languages
  const browserLanguages = navigator.languages || [navigator.language];
  
  // Check each browser language
  for (const browserLang of browserLanguages) {
    // Extract just the language code (e.g., 'en-US' -> 'en')
    const langCode = browserLang.toLowerCase().split('-')[0];
    
    // Check for exact match first
    if (SUPPORTED_LOCALES.includes(browserLang.toLowerCase())) {
      return browserLang.toLowerCase();
    }
    
    // Check for language code match
    if (SUPPORTED_LOCALES.includes(langCode)) {
      return langCode;
    }
  }

  return null;
};

export const useLanguageDetection = () => {
  const router = useRouter();
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      setIsDetecting(false);
      return;
    }

    // Wait for router to be ready
    if (!router.isReady) {
      return;
    }

    // Check if user has manually selected a language
    const userPreference = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    
    // If user already manually selected a language, respect it
    if (userPreference && SUPPORTED_LOCALES.includes(userPreference)) {
      setIsDetecting(false);
      return;
    }

    // Check if we've already done auto-detection for this session
    const alreadyDetected = sessionStorage.getItem(LOCALE_DETECTION_KEY);
    if (alreadyDetected) {
      setIsDetecting(false);
      return;
    }

    // Get current locale from router
    const currentLocale = router.locale || router.defaultLocale || 'en';

    // Only auto-detect if we're on the default locale (first visit)
    if (currentLocale === (router.defaultLocale || 'en')) {
      const detectedLocale = getLocaleFromBrowser();
      
      if (detectedLocale && detectedLocale !== currentLocale) {
        // Mark that we've detected the locale
        sessionStorage.setItem(LOCALE_DETECTION_KEY, 'true');
        
        // Redirect to detected locale
        router.push(router.pathname, router.asPath, { locale: detectedLocale });
      }
    }

    setIsDetecting(false);
  }, [router.isReady, router.locale, router.defaultLocale, router.pathname, router.asPath]);

  return { isDetecting };
};

// Function to save user's manual language selection
export const saveLanguagePreference = (locale: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  }
};

