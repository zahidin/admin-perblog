import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  error?: Object;
}

export default function button(props: Props) {
  return (
    <div className="form-group-custom">
      <button
        type={props.type}
        disabled={props.disabled}
        name={props.name}
        id={props.id}
        {...props}
      >
        {props.label}
      </button>
    </div>
  );
}
