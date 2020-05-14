import React from 'react';
import './style.scss';
import { CardProps } from '@/types/components/card';

function card(props: CardProps) {
  return (
    <div className="card-custom shadow-2">
      <div className="card-custom__content">{props.children}</div>
    </div>
  );
}
export default card;
