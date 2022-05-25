import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import getLang from '../../locales/lang';

const PageHead = () => {
  const t = getLang(useRouter());
  const domain = 'https://erikwelander.se';
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="title" content={t.PAGE_TITLE} />
      <meta name="description" content={t.PAGE_DESCRIPTION} />
      <meta
        name="keywords"
        content="erik welander, fullstack engineer, fullstack developer, full stack engineer, full stack developer, personal home page, personal web page, cv, cv page, cv-page"
      />
      <meta name="author" content="Erik Welander &lt;erik.welander@hotmail.com&gt;" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={t.PAGE_TITLE} />
      <meta property="og:description" content={t.PAGE_DESCRIPTION} />
      <meta property="og:image" content={`${domain}/img/jpg/page-preview-2.jpg`} />
      <meta property="og:url" content={domain} />

      <link href="https://erikwelander.se" rel="canonical" />
      <link rel="icon" href="img/jpg/erik-welander-2-icon.jpg" type="image/jpg" />
      <title>{t.PAGE_TITLE}</title>
    </Head>
  );
};

export default PageHead;
