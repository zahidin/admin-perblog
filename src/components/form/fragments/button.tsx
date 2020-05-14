import React from 'react';
import { ButtonProps } from '@/types/components/form';

export default function button(props: ButtonProps) {
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
