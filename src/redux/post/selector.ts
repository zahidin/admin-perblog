import { createSelector } from 'reselect';
import { AppStore } from '../reducer';
import { Post } from '@/types/post';

const makeIsLoading = (state: AppStore) => state.post.isLoading;
const makeIsError = (state: AppStore) => state.post.isError;
const makePost = (state: AppStore) => state.post.data;

export const getIsLoading = createSelector(makeIsLoading, (item: boolean) => item);
export const getDataPost = createSelector(makePost, (item: Post) => item);
export const getPostIsError = createSelector(makeIsError, (item: boolean) => item);
