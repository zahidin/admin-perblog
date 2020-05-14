import React, { SetStateAction } from 'react';
import Input from '@components/form/input';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { validationEn } from '@/locales/validation';
import { FormPasswordProps, FormPassword } from '@/types/app/login';

yup.setLocale(validationEn);

const validationSchema = yup.object().shape({
  password: yup.string().min(8).required(),
});

function formEmail(props: FormPasswordProps) {
  const { setFormData, formData } = props;
  // tslint:disable-next-line: react-hooks-nesting
  const { control, setValue, handleSubmit, errors } = useForm<FormPassword>({
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
              type="password"
              name="password"
              id="password"
              label="Your password"
              error={errors.password}
            />
          }
          name="password"
          defaultValue=""
          control={control}
        />
        <Input type="submit" name="submit" id="submit" label="Submit" />
      </form>
    </div>
  );
}

export default formEmail;
