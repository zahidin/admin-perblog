import React from 'react';
import classNames from 'classnames';

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

export default function inputText(props: Props) {
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
        className={classNames({ 'input-error animation-shake': props.error })}
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
