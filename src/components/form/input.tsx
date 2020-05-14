import React from 'react';
import './style.scss';
import InputText from './fragments/inputText';
import Button from './fragments/button';
import { InputProps } from '@/types/components/form';

export default function input(props: InputProps) {
  switch (props.type) {
    case 'number':
    case 'password':
    case 'text':
      return <InputText {...props} />;

    case 'submit':
      return <Button {...props} type="submit" />;

    default:
      break;
  }
}
