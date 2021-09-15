import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/globals/page-layout';
import { NextPageContext } from 'next';

interface MyAppProps extends AppProps {
  uaString: string;
}

const MyApp = ({ Component, pageProps, uaString }: MyAppProps) => {
  // Make sure that we always have a language path in our route
  // (Url bar change only)
  const router = useRouter();
  useEffect(() => {
    const path = window.location.pathname;
    if (!path.startsWith('/en') && !path.startsWith('/sv')) {
      let newUrl = router.locale + router.asPath;
      if (newUrl.charAt(newUrl.length - 1) === '/') {
        newUrl = newUrl.substring(0, newUrl.length - 1);
      }

      window.history.replaceState(null, window.document.title, newUrl);
    }
  }, [router.asPath, router.locale]);

  return (
    <>
      <Layout uaString={uaString}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;

export function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      uaString:
        context.req?.headers['user-agent'] ||
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
    },
  };
}
