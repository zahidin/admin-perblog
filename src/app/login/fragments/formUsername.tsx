import React, { SetStateAction } from 'react';
import Input from '@components/form/input';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { validationEn } from '@/locales/validation';
import { FormUsernameProps, FormUsername } from '@/types/app/login';

yup.setLocale(validationEn);

const validationSchema = yup.object().shape({
  username: yup.string().required(),
});

function formUsername(props: FormUsernameProps) {
  const { formData, setFormData } = props;
  // tslint:disable-next-line: react-hooks-nesting
  const { control, setValue, handleSubmit, errors } = useForm<FormUsername>({
    validationSchema: validationSchema,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };
  return (
    <div>
      <form className="gap" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={
            <Input
              type="text"
              name="username"
              id="text"
              label="Your Username"
              error={errors.username}
            />
          }
          name="username"
          defaultValue=""
          control={control}
        />
        <Input type="submit" name="submit" id="submit" label="Continue" />
      </form>
    </div>
  );
}

export default formUsername;
