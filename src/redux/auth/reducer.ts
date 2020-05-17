import { Action } from '@/types/redux/action';

interface State {
  data: {
    result?: {
      token?: string;
      refreshToken?: string;
    };
  };
  isLoading: boolean;
  isError: boolean;
  flag: string;
  errMessage: string;
}

const initialState: State = {
  data: {},
  isLoading: false,
  isError: false,
  flag: '',
  errMessage: '',
};

const authReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'GET_ALL_AUTH_PENDING':
      return { ...state, isLoading: true };
    case 'GET_ALL_AUTH_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMessage: '',
        flag: '',
        data: action.data as {},
      };
    case 'GET_ALL_AUTH_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: action.message,
        flag: action.flag,
      };
    default:
      return state;
  }
};

export default authReducer;
