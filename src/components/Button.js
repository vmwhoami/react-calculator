import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, clickHandler, color,
  } = props;

  const handleClick = buttonName => clickHandler(buttonName);
  const handleBtn = () => {
    if (color === name) {
      return 'button orange';
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
  // wide: PropTypes.string.isRequired,
};
Button.default = {
  name: '',

};

export default Button;
