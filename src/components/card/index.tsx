import React from 'react';
import './style.scss';

interface Props {
  children: React.ReactNode;
}
function card(props: Props) {
  return (
    <div className="card-custom shadow-2">
      <div className="card-custom__content">{props.children}</div>
    </div>
  );
}
export default card;
