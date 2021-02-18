import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, clickHandler, color, wide,
  } = props;

  const handleClick = buttonName => clickHandler(buttonName);
  const handleBtn = () => {
    if (color === name) {
      return 'button orange';
    } if (wide === name) {
      return 'button wide';
    }
    return 'button';
  };

  return (
    <>
      <button type="button" className={handleBtn()} onClick={() => handleClick(name)}>{name}</button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
};
Button.default = {
  name: '',
  color: '',
  wide: '',
};

export default Button;
