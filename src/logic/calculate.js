import Operate from './operate';

const Calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj;
  const operations = ['+', 'X', '-', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  switch (btnName) {
    case '+/-': {
      (total *= -1).toString();
      if (next) (next *= -1).toString();
      break;
    }
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '%': {
      if ((total !== null || total !== undefined)) {
        (total /= 100).toString();
        operation = null;
      }
      break;
    }
    case '.': {
      if (next && !next.toString().includes('.')) {
        next = `${next.toString()}.`;
      }
      break;
    }
    default:
      break;
  }

  if (nums.includes(btnName) && operation === null) {
    total = total === null ? btnName : total + btnName;
  } else if (nums.includes(btnName) && operation !== null) {
    next = next === null ? btnName : next + btnName;
  } else if (
    operations.includes(btnName)
    && (total !== null || total !== undefined)
  ) {
    operation = btnName;
  } else if (btnName === '=' && total !== null && next !== null) {
    if (operations.includes(operation)) {
      total = Operate(total, next, operation);
      operation = null;
      next = null;
    }
  }

  return { total, next, operation };
};

export default Calculate;
