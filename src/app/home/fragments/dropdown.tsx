import React, { useState } from 'react';
import { icons } from '@assets/index';
import '@app/home/styles/index.scss';
import classNames from 'classnames';

interface Props {}
function Tooltip(props: Props) {
  const [active, setActive] = useState<boolean>(false);
  const { ChevronDown } = icons;

  return (
    <div
      tabIndex={0}
      className={classNames('dropdown', { 'is-active': active === true })}
      onClick={() => setActive(!active)}
      onBlur={() => setActive(false)}
    >
      <div className="dropdown-trigger is-clickable">
        <span className="icon is-large">
          <ChevronDown />
        </span>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="tooltip shadow-1">
          <div className="tooltip-content">
            <ul>
              <li>
                <span>Edit Draft</span>
              </li>
              <li>
                <span>Delete Draft</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
