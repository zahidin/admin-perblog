import React, { SetStateAction } from 'react';
import Input from '@components/form/input';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { validationEn } from '@/locales/validation';

interface Props {
  setFormData: React.Dispatch<SetStateAction<object>>;
  formData: object;
}
type FormData = {
  email: string;
};
yup.setLocale(validationEn);

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
});

function formEmail(props: Props) {
  const { formData, setFormData } = props;
  // tslint:disable-next-line: react-hooks-nesting
  const { control, setValue, handleSubmit, errors } = useForm<FormData>({
    validationSchema: validationSchema,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };
  return (
    <div>
      <form className="gap" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={<Input type="text" name="email" id="text" label="Your email" error={errors.email} />}
          name="email"
          defaultValue=""
          control={control}
        />
        <Input type="submit" name="submit" id="submit" label="Continue" />
      </form>
    </div>
  );
}

export default formEmail;