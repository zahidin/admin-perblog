import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Login from '@app/login';
import { checkingToken } from '@util/token';

interface Context extends NextPageContext {
  auth?: boolean;
  token?: string;
}

export default function protectedPage(WrappedComponent: NextPage) {
  const protectedPage = (props) => {
    if (!props.auth) {
      return (
        <>
          <Login />
          <WrappedComponent {...props} />;
        </>
      );
    }
    return <WrappedComponent {...props} />;
  };

  protectedPage.getInitialProps = async (ctx: Context) => {
    const auth: boolean = checkingToken();
    ctx.auth = auth;

    // const pageProps =
    //   WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return {
      pageProps: WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps(ctx)
        : {},
      auth,
    };
  };
  return protectedPage;
}
