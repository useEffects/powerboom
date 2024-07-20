export const locales = ['en', 'fr-FR', 'ar-AE'] as const;
export const fallbackLng = 'en';
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = 'common';