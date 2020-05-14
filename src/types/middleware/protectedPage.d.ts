import { NextPageContext } from 'next';

export interface Context extends NextPageContext {
  auth?: boolean;
  token?: string;
}
