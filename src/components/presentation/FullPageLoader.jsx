import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const FullPageLoader = () => (
  <Fragment>
    <div className='FullPageLoader'>
      <span>
        <FontAwesomeIcon icon={faSpinner} size='3x' spin />
      </span>
    </div>
  </Fragment>
);

export default FullPageLoader;
