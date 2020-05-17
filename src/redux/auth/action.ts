import { Dispatch } from 'redux';
import { requestLogin } from '@api/authentication';

const loadingAuth = () => ({
  type: 'GET_ALL_AUTH_PENDING',
});

const successAuth = (data: {} | []) => ({
  type: 'GET_ALL_AUTH_FULFILLED',
  data,
});

const errorAuth = (res: { message: string }) => ({
  type: 'GET_ALL_AUTH_REJECTED',
  message: res.message,
});

const requestLoggedIn = (data) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAuth());
    try {
      const res = await requestLogin(data);
      if (!res.success) {
        return dispatch(errorAuth(res));
      }
      return dispatch(successAuth(res));
    } catch (error) {
      return dispatch(errorAuth(error.message));
    }
  };
};

export default requestLoggedIn;
