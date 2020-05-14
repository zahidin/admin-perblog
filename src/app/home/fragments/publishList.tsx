import React, { useState } from 'react';

function publishList() {
  return (
    <div className="is-flex flex-1 flex-column align-items-center justify-content-center">
      <span className="h4 section-not-found-post">
        You haven’t published any public stories yet.
      </span>
    </div>
  );
}

export default React.memo(publishList);
