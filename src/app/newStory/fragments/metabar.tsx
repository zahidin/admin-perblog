import React from 'react';
import { icons } from '@/assets/index';
import { MetabarProps } from '@/types/app/newStory';
import classNames from 'classnames';

function Metabar(props: MetabarProps) {
  const { statusSave, onSubmit } = props;
  const { LogoSmall } = icons;
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container metabar">
        <div className="navbar-brand align-items-center">
          <a className="navbar-item" href="https://bulma.io"></a>
          <LogoSmall />
          <span className="ml-2 h6">Draft</span>
          <span className="ml-4 caption has-text-grey">{statusSave}</span>
          <a
            role="button"
            href="https://bulma.io"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <button
                className={classNames('button is-primary is-small rounded-2', {
                  'is-loading': statusSave === 'Saving...',
                })}
                onClick={() => onSubmit()}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Metabar;
