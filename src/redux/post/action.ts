import { Dispatch } from 'redux';
import { requestPost } from '@api/post';

const loadingGetPost = () => ({
  type: 'GET_ALL_POST_PENDING',
});

const successGetPost = (data: {} | []) => ({
  type: 'GET_ALL_POST_FULFILLED',
  data,
});

const errorGetPost = (res: { message: string; flag?: string }) => ({
  type: 'GET_ALL_POST_REJECTED',
  message: res.message,
  flag: res.flag,
});

const getPost = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingGetPost());
    try {
      const res = await requestPost();
      if (!res.success) {
        return dispatch(errorGetPost(res));
      }
      return dispatch(successGetPost(res.result));
    } catch (error) {
      return dispatch(errorGetPost({ message: error.message }));
    }
  };
};

export default getPost;
