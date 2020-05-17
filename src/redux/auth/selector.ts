import { createSelector } from 'reselect';
import { AppStore } from '../reducer';
import { Auth } from '@/types/redux/auth';

const makeIsLoading = (state: AppStore) => state.auth.isLoading;
const makeIsError = (state: AppStore) => state.auth.isError;
const makeErrorMessage = (state: AppStore) => state.auth.errMessage;
const makeAuth = (state: AppStore) => state.auth.data;

export const getAuthIsLoading = createSelector(makeIsLoading, (item: boolean) => item);
export const getDataAuth = createSelector(makeAuth, (item: Auth) => item);
export const getAuthIsError = createSelector(makeIsError, (item: boolean) => item);
export const getAuthErrorMessage = createSelector(makeErrorMessage, (item: string) => item);
