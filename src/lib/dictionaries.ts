/**
 * @fileoverview Utility for loading localized dictionary JSON files
 * based on the user's current locale (from cookie or headers).
 *
 * This module imports static JSON files containing translations and
 * exposes a helper that automatically selects the right one.
 */

import en from '@/messages/en.json';
import es from '@/messages/es.json';
import { getRequestLocale } from './locale';

/**
 * Load the translation dictionary for the current request.
 *
 * Permissions:
 * - Reads the `locale` cookie from the request (via `getRequestLocale`).
 * - If no cookie is found, falls back to `Accept-Language` header or defaults to `'en'`.
 *
 * @async
 * @function getDictionary
 * @returns {Promise<Record<string, any>>}
 *   A promise resolving to the dictionary object for the active locale.
 *
 * @example
 * ```tsx
 * import { getDictionary } from '@/lib/dictionaries';
 *
 * export default async function Page() {
 *   const dict = await getDictionary();
 *   return <h1>{dict.homePage.heroTitle1}</h1>;
 * }
 * ```
 */
export async function getDictionary() {
    return getRequestLocale() === 'es' ? es : en;
}
