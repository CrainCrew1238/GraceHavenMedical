/**
 * @fileoverview Next.js middleware for locale management.
 *
 * Responsibilities:
 * 1. Strip `/en` or `/es` prefixes from incoming URLs and redirect
 *    to the clean path while setting a `locale` cookie.
 * 2. If no locale cookie exists, resolve the preferred locale from
 *    the `Accept-Language` header and set it (no redirect).
 * 3. Allow requests to continue unchanged if a valid locale cookie exists.
 *
 * Permissions:
 * - Reads request headers to parse language preferences.
 * - Reads/writes `locale` cookies.
 * - Issues 307 redirects for prefixed paths.
 */

import { NextRequest, NextResponse } from 'next/server';
import { match as localeMatch } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const SUPPORTED = ['en', 'es'] as const;
const DEFAULT_LOCALE: (typeof SUPPORTED)[number] = 'en';

/**
 * Determine the best matching locale from the request's Accept-Language header.
 *
 * @param {NextRequest} request - The incoming Next.js request.
 * @returns {'en' | 'es'}
 *   The preferred locale, or the default if no match is found.
 *
 * @example
 * const locale = getPreferredLocale(request);
 * console.log(locale); // 'en' or 'es'
 */
function getPreferredLocale(request: NextRequest): (typeof SUPPORTED)[number] {
  const negotiator = new Negotiator({
    headers: Object.fromEntries(request.headers.entries()),
  });
  const languages = negotiator.languages();
  return localeMatch(languages, SUPPORTED, DEFAULT_LOCALE) as (typeof SUPPORTED)[number];
}

/**
 * Middleware to manage locale cookies and URL normalization.
 *
 * Flow:
 * - If the path starts with a supported locale segment (e.g. `/en/foo`),
 *   strip it, set the cookie, and redirect to `/foo`.
 * - If no cookie exists, set one using the best guess from headers (no redirect).
 * - Otherwise, allow the request to proceed unchanged.
 *
 * Permissions:
 * - Reads cookies, writes cookies.
 * - Reads headers (`Accept-Language`).
 * - Redirects requests when locale prefixes are present.
 *
 * @param {NextRequest} request - The incoming request.
 * @returns {NextResponse}
 *   A redirect, a NextResponse with a new cookie, or the unchanged response.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean); // e.g. ["en","iv-therapy"]

  // 1) Strip locale prefix if present
  const head = segments[0];
  if (head && SUPPORTED.includes(head as any)) {
    const restPath = '/' + segments.slice(1).join('/');
    const url = new URL(restPath === '/' ? '/' : restPath, request.url);
    url.search = search; // preserve query params

    const res = NextResponse.redirect(url, 307);
    res.cookies.set('locale', head as (typeof SUPPORTED)[number], {
      path: '/',
      sameSite: 'lax',
    });
    return res;
  }

  // 2) Set locale cookie from Accept-Language if missing
  const cookieLocale = request.cookies.get('locale')?.value;
  if (!cookieLocale || !SUPPORTED.includes(cookieLocale as any)) {
    const preferred = getPreferredLocale(request);
    const res = NextResponse.next();
    res.cookies.set('locale', preferred, {
      path: '/',
      sameSite: 'lax',
    });
    return res;
  }

  // 3) Continue as-is if cookie is valid
  return NextResponse.next();
}

/**
 * Next.js middleware configuration.
 * Ensures the middleware runs on all routes except internal
 * assets (`/_next`) and static files.
 */
export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
  ],
};
