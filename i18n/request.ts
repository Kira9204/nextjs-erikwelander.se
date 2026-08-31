import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { locale as getRootLocale } from 'next/root-params';
import { routing } from './routing';

export default getRequestConfig(async () => {
  const requested = await getRootLocale();
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: {
      common: (await import(`../messages/${locale}/common.json`)).default,
      home: (await import(`../messages/${locale}/home.json`)).default,
      resume: (await import(`../messages/${locale}/resume.json`)).default,
      projects: (await import(`../messages/${locale}/projects.json`)).default,
    },
  };
});
