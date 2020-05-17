import { Action } from '@/types/redux/action';
interface State {
  data: [] | {};
  isLoading: boolean;
  isError: boolean;
  flag: '';
  errMessage: '';
}

const initialState: State = {
  data: [] || {},
  isLoading: false,
  isError: false,
  flag: '',
  errMessage: '',
};

const postReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'GET_ALL_POST_PENDING':
      return { ...state, isLoading: true };
    case 'GET_ALL_POST_FULFILLED':
      return { ...state, isLoading: false, data: action.data };
    case 'GET_ALL_POST_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default postReducer;
