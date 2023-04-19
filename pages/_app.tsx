import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Footer from '@components/Footer';
import { Notifications } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
        <Notifications />
        <Footer />
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
