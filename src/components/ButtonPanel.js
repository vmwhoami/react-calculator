import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <>
      <div className="groups">
        {group1.map(element => (
          <Button
            name={element}
            key={`${element}`}
            clickHandler={handleClick}
            color="÷"
            wide=""
          />
        ))}
      </div>
      <div className="groups">
        {group2.map(element => (
          <Button
            name={element}
            key={`${element}`}
            clickHandler={handleClick}
            color="X"
            wide=""
          />
        ))}
      </div>
      <div className="groups">
        {group3.map(element => (
          <Button
            name={element}
            key={`${element}`}
            clickHandler={handleClick}
            color="-"
            wide=""
          />
        ))}
      </div>
      <div className="groups">
        {group4.map(element => (
          <Button
            name={element}
            key={`${element}`}
            clickHandler={handleClick}
            color="+"
            wide=""
          />
        ))}
      </div>
      <div className="groups">
        {group5.map(element => (
          <Button
            name={element}
            key={`${element}`}
            color="="
            wide="0"
            clickHandler={handleClick}
          />
        ))}
      </div>
    </>
  );
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
