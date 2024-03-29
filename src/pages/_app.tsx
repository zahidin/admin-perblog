import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '@styles/index.scss';

import withRedux from 'next-redux-wrapper';
import { initStore } from '@/redux/store';
import { Provider } from 'react-redux';
import setLocale from 'yup/lib/setLocale';
import { validationEn } from '@/locales/validation';
import { MyAppProps } from '@/types/pages/app';

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    setLocale(validationEn);
    return (
      <>
        <Head>
          <title>Hello World</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(initStore)(MyApp);
