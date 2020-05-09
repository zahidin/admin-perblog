import { Dispatch } from 'redux';
import { requestPost } from '@api/post';

const loadingGetPost = () => ({
  type: 'GET_ALL_POST_PENDING',
});

const successGetPost = (data: {} | []) => ({
  type: 'GET_ALL_POST_FULFILLED',
  data,
});

const errorGetPost = (message: string) => ({
  type: 'GET_ALL_POST_REJECTED',
  message,
});

const getPost = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingGetPost());
    try {
      const res = await requestPost();
      return dispatch(successGetPost(res));
    } catch (error) {
      return dispatch(errorGetPost(error.message));
    }
  };
};

export default getPost;
