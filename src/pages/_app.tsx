import React from 'react';
import App, { AppInitialProps } from 'next/app';
import Head from 'next/head';
import '@styles/index.scss';

import withRedux, { WrappedAppProps } from 'next-redux-wrapper';
import { initStore } from '@/redux/store';
import { Provider } from 'react-redux';

interface MyAppProps extends AppInitialProps, WrappedAppProps {}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  render() {
    const { Component, pageProps, store } = this.props as any;
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
