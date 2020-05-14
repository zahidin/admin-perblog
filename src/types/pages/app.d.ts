import { AppProps } from 'next/app';
import { Store, AnyAction } from 'redux';

export interface MyAppProps extends AppProps {
  store: Store<any, AnyAction>;
}
