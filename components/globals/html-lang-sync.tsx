'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { routing } from '../../i18n/routing';

// The <html lang> attribute lives in the persistent root layout (app/layout.tsx), which is
// intentionally never re-rendered on a locale switch (see page-chrome.tsx). Since plain
// next/navigation's usePathname() still updates live on client-side navigation, this keeps
// the attribute correct without requiring the root layout itself to remount.
const HtmlLangSync = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    const firstSegment = pathname.split('/')[1];
    const locale = routing.locales.find((candidate) => candidate === firstSegment) ?? routing.defaultLocale;
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
};

export default HtmlLangSync;
