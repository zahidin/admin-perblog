import { Dispatch } from 'redux';
import { requestPost, requestAddPost } from '@api/post';

const loadingPost = () => ({
  type: 'GET_ALL_POST_PENDING',
});

const successGetPost = (data: {} | []) => ({
  type: 'GET_ALL_POST_FULFILLED',
  data,
});

const concatDataPost = (data: {} | []) => ({
  type: 'CONCAT_DATA_POST',
  data,
});

const errorPost = (res: { message: string; flag?: string }) => ({
  type: 'GET_ALL_POST_REJECTED',
  message: res.message,
  flag: res.flag,
});

export const getPost = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingPost());
    try {
      const res = await requestPost();
      if (!res.success) {
        return dispatch(errorPost(res));
      }
      return dispatch(successGetPost(res.result));
    } catch (error) {
      return dispatch(errorPost({ message: error.message }));
    }
  };
};

export const addPost = (data) => {
  const dataBlock =
    data && data.blocks.find((element: { type: string }) => element.type === 'header-two');

  const resultData = {
    title: dataBlock.text.toString(),
    date: Math.round(+new Date() / 1000).toString(),
    content: JSON.stringify(data),
    tags: '',
  };
  console.log('addPost -> resultData', resultData);
  return async (dispatch: Dispatch) => {
    dispatch(loadingPost());
    try {
      const res = await requestAddPost(resultData);
      if (!res.success) {
        return dispatch(errorPost(res));
      }
      return dispatch(concatDataPost(res.result));
    } catch (error) {
      return dispatch(errorPost({ message: error.message }));
    }
  };
};
