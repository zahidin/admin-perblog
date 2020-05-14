import React from 'react';
import classNames from 'classnames';
import { InputProps } from '@/types/components/form';

export default function inputText(props: InputProps) {
  const checkingError = (error) => {
    if (error) return error?.message;
    return props.label;
  };

  return (
    <div className="form-group-custom">
      <label
        className={classNames('flex align-items-center justify-content-center text-center', {
          'has-text-danger': props.error,
        })}
        htmlFor={props.name}
      >
        {checkingError(props.error)}
      </label>

      <input
        className={classNames({ 'input-error': props.error })}
        type={props.type}
        name={props.name}
        id={props.id}
        maxLength={props.maxLength}
        disabled={props.disabled}
        {...props}
      />
    </div>
  );
}
