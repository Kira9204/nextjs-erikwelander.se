import React from 'react';
import { getLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { useUserAgent as parseUserAgent } from 'next-useragent';
import StyledComponentsRegistry from '../lib/styled-components-registry';
import PageChrome from '../components/globals/page-chrome';
import HtmlLangSync from '../components/globals/html-lang-sync';

// This is the true root layout, kept outside of app/[locale] on purpose: it renders the
// locale-independent app shell (particle background animation, <html>/<body>) which must
// persist across locale switches instead of remounting, since app/[locale]/layout.tsx would
// otherwise be recreated whenever the locale route segment changes.
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  // Detect device type server-side (used to skip the heavy particle animation on mobile)
  const hdrs = await headers();
  const ua = parseUserAgent(hdrs.get('user-agent') ?? '');

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <HtmlLangSync />
          <PageChrome isDesktop={ua.isDesktop}>{children}</PageChrome>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
