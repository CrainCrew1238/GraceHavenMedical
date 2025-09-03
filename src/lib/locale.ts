/**
 * @fileoverview Helpers for resolving the user's locale from cookies
 * or HTTP headers. Used by middleware and dictionary loading logic.
 */

import { cookies, headers } from 'next/headers';

const SUPPORTED = new Set(['en', 'es']);
const DEFAULT = 'en';

/**
 * Resolve the locale for the current request.
 *
 * Permissions:
 * - Reads the `locale` cookie from the incoming request (if set by middleware).
 * - Reads the `Accept-Language` HTTP header if no valid cookie is found.
 *
 * Behavior:
 * - If the cookie exists and matches a supported locale, return it.
 * - Otherwise, check the `Accept-Language` header and return `'es'` if it starts with `"es"`.
 * - Defaults to `'en'` if neither match.
 *
 * @function getRequestLocale
 * @returns {'en' | 'es'}
 *   The resolved locale for the current request.
 *
 * @example
 * ```ts
 * import { getRequestLocale } from '@/lib/locale';
 *
 * const locale = getRequestLocale();
 * console.log(locale); // 'en' or 'es'
 * ```
 */
export function getRequestLocale(): 'en' | 'es' {
    const c = cookies().get('locale')?.value;
    if (c && SUPPORTED.has(c)) return c as 'en' | 'es';

    const accept = headers().get('accept-language') || '';
    return accept.toLowerCase().startsWith('es') ? 'es' : (DEFAULT as 'en');
}
