import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <>
      <button type="button">{name}</button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
Button.default = {
  name: '',
};
export default Button;
