import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  return (
    <>
      <div className="group1">
        {group1.map(element => <Button name={element} key={`${element}`} />)}
      </div>
      <div className="group2">
        {group2.map(element => <Button name={element} key={`${element}`} />)}
      </div>
      <div className="group3">
        {group3.map(element => <Button name={element} key={`${element}`} />)}
      </div>
      <div className="group4">
        {group4.map(element => <Button name={element} key={`${element}`} />)}
      </div>
      <div className="group5">
        {group5.map(element => <Button name={element} key={`${element}`} />)}
      </div>
    </>
  );
};

export default ButtonPanel;
