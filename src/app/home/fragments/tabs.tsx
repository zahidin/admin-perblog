import React from 'react';
import classNames from 'classnames';

interface Props {
  setTypeTab: Function;
  typeTab: string;
  lengthStory: number;
}

function tabs(props: Props) {
  const { setTypeTab, typeTab, lengthStory } = props;
  return (
    <div className="tabs">
      <ul>
        <li
          className={classNames({ 'is-active': typeTab === 'drafts' })}
          onClick={() => setTypeTab('drafts')}
        >
          <a>Drafts {lengthStory === 0 ? '' : lengthStory}</a>
        </li>
        <li
          className={classNames({ 'is-active': typeTab === 'published' })}
          onClick={() => setTypeTab('published')}
        >
          <a>Published</a>
        </li>
      </ul>
    </div>
  );
}
export default React.memo(tabs);
