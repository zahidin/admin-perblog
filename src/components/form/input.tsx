import React, { HtmlHTMLAttributes } from 'react';
import './style.scss';
import InputText from './fragments/inputText';
import Button from './fragments/button';
interface Props extends React.HTMLAttributes<HTMLElement> {
  type?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  error?: Object;
}
export default function input(props: Props) {
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
