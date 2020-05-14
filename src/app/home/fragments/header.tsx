import React from 'react';

function header() {
  return (
    <div className="section-title is-flex flex-1">
      <div className="is-flex flex-1 align-items-center">
        <span className="font-weight-600 h1 has-text-black">Your Stories</span>
      </div>
      <div className="is-flex flex-1 align-items-center justify-content-end">
        <button className="button is-primary is-outlined">Write a story</button>
      </div>
    </div>
  );
}
export default React.memo(header);
