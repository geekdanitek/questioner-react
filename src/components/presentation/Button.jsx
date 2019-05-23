import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type,
  children,
  role,
  onClick,
  className,
  disabled
}) => (
  <Fragment>
    <button
      type={type}
      role={role}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  </Fragment>
);

export default Button;
