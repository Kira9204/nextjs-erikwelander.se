import React from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import PageLocaleChrome from '../../components/globals/page-locale-chrome';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  const domain = 'https://erikwelander.se';
  const previewImage = `${domain}/img/jpg/page-preview-2.jpg`;

  return {
    title: t('PAGE_TITLE'),
    description: t('PAGE_DESCRIPTION'),
    authors: [{ name: 'Erik Welander', url: 'mailto:erik.welander@hotmail.com' }],
    keywords:
      'erik welander, fullstack engineer, fullstack developer, full stack engineer, full stack developer, personal home page, personal web page, cv, cv page, cv-page',
    alternates: {
      canonical: domain,
    },
    icons: {
      icon: '/img/jpg/erik-welander-2-icon.jpg',
    },
    openGraph: {
      title: t('PAGE_TITLE'),
      description: t('PAGE_DESCRIPTION'),
      url: domain,
      images: [previewImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <PageLocaleChrome>{children}</PageLocaleChrome>
    </NextIntlClientProvider>
  );
}
