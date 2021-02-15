import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const numO = Big(numberOne);
  const numT = Big(numberTwo);
  let result = null;
  switch (operation) {
    case '÷': {
      if (numberTwo === 0) {
        result = 'Cannot divide by zero';
      }
      result = numO.div(numT);
      break;
    }
    case 'X': {
      result = numO.mul(numT);
      break;
    }
    case '-': {
      result = numO.minus(numT);
      break;
    }
    case '+': {
      result = numO.plus(numT);
      break;
    }
    default:
      break;
  }
  return result.toString();
};

export default Operate;
