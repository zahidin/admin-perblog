export type FormData = {
  email: string;
  password: string;
};

export type FormPassword = {
  password: string;
};

export type FormEmail = {
  email: string;
};

export interface FormPasswordProps {
  setFormData: React.Dispatch<SetStateAction<object>>;
  formData: object;
}

export interface FormEmailProps extends FormPasswordProps {}
