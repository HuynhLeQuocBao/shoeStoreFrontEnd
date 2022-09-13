import { SessionProvider, getSession } from 'next-auth/react';
import { SWRConfig } from 'swr';
import { AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import { MainLayout } from '@/layout/index';
import axiosClient from '../apiClient/axiosClient';
import Head from 'next/head';
import App from 'next/app';
import axios from 'axios';
import Script from 'next/script';
import { normalizeSettingsData } from '@/utils/normalization/normalizeSettingsData';

function MyApp(props) {
  const { Component, pageProps, session, settings } = props;
  const Layout = Component.Layout ?? MainLayout;

  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta property='og:title' content='Samsung TV The Serif' key='title' />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>

      <Script
        id='gtm'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${settings.GTM_ID}');
          `,
        }}
      />

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${settings.GTM_ID}`}
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <SWRConfig
        value={{
          fetcher: (url) => axiosClient.get(url),
          shouldRetryOnError: false,
        }}
      >
        <SessionProvider session={session}>
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </SessionProvider>
      </SWRConfig>
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  const session = await getSession(context);
  const isSever = typeof window === 'undefined';

  let settings;
  try {
    const result = await axios.get(
      `${isSever ? process.env.API_URL : ''}/api/setting`
    );
    settings = normalizeSettingsData(result.data?.data || []);
  } catch (error) {
    settings = {};
  }

  return { ...appProps, session, settings };
};

export default MyApp;
