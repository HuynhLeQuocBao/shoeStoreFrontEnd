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
  const { Component, pageProps, session } = props;
  const Layout = Component.Layout ?? MainLayout;

  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <>
      <Head>
        <title>Footwear</title>
        <meta property='og:title' content='Footwear' key='title' />
        <link rel='shortcut icon' href='/favicon.png' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

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
