import React, { ReactHTMLElement } from 'react';

export interface InputProps extends React.HTMLAttributes<ReactHTMLElement> {
  type?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  error?: Object;
}

export interface ButtonProps extends InputProps {
  type?: 'button' | 'submit' | 'reset';
}
