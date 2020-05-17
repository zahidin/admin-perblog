export type FormData = {
  username: string;
  password: string;
};

export type FormPassword = {
  password: string;
};

export type FormUsername = {
  username: string;
};

export interface FormPasswordProps {
  setFormData: React.Dispatch<SetStateAction<object>>;
  formData: object;
  requestLoggedIn?: Function;
}

export interface FormUsernameProps extends FormPasswordProps {}

export interface LoginProps {
  authIsLoading: boolean;
  auth: {
    result?: {
      token?: string;
      refreshToken?: string;
    };
  };
  authIsError: boolean;
  authErrorMessage: string;
  requestLoggedIn: Function;
}
