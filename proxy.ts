import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all paths except for ones starting with api, _next, or containing a dot (static files)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
