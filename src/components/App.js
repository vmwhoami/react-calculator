import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  const [Obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const { ...obj } = Obj;
    const { total, next, operation } = obj;
    const result = Calculate({ total, next, operation }, buttonName);

    setObj({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };

  const { total, next, operation } = Obj;
  return (
    <>
      <Display result={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
