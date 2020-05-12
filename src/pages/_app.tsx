import React from 'react';
import App, { AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/index.scss';

import withRedux, { WrappedAppProps } from 'next-redux-wrapper';
import { initStore } from '@/redux/store';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';
import setLocale from 'yup/lib/setLocale';
import { validationEn } from '@/locales/validation';

interface MyAppProps extends AppProps {
  store: Store<any, AnyAction>;
}

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
