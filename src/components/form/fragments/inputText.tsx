import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  type?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  label?: string;
}

export default function inputText(props: Props) {
  return (
    <div className="form-group-custom">
      <label
        className="flex align-items-center justify-content-center text-center"
        htmlFor={props.name}
      >
        {props.label}
      </label>

      <input
        type={props.type}
        name={props.name}
        id={props.id}
        maxLength={props.maxLength}
        disabled={props.disabled}
      />
    </div>
  );
}
