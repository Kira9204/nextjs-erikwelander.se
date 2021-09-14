import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/globals/page-layout';
import { NextPageContext } from 'next';

interface MyAppProps extends AppProps {
    uaString: string;
}

const MyApp = ({ Component, pageProps, uaString }: MyAppProps) => {
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
