import Operate from './operate';

const convToString = (total, next, operation) => {
  if (total) total.toString();
  if (next) next.toString();
  if (operation) operation.toString();

  return { total, next, operation };
};

const Calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj;
  const operations = ['+', 'X', '-', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const isErrorString = total === 'Cannot divide by zero';
  const totalNotNullOrUndefined = total !== null || total !== undefined;
  const opertionAndTotalNull = operation === null && total === null;
  const operationNullAndTotalWithoutDot = operation === null && total && !total.toString().includes('.');
  const nextAndWithoutDot = next && !next.toString().includes('.');
  const totalAndOperationNextNull = total && operation && next === null;

  if (isErrorString) {
    total = 0;
    next = null;
    operation = null;
  }

  switch (btnName) {
    case '+/-': {
      (total *= -1).toString();
      if (next) {
        (next *= -1).toString();
      }
      break;
    }
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '%': {
      if (totalNotNullOrUndefined) {
        (total /= 100).toString();
        operation = null;
      }
      break;
    }
    case '.': {
      if (opertionAndTotalNull) {
        total = '0.';
      } else if (operationNullAndTotalWithoutDot) {
        total = `${total.toString()}.`;
      } else if (nextAndWithoutDot) {
        next = `${next.toString()}.`;
      } else if (totalAndOperationNextNull) {
        next = '0.';
      }
      break;
    }
    default:
      break;
  }

  const operNullNumsWithBtnName = nums.includes(btnName) && operation === null;

  if (operNullNumsWithBtnName) {
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
  // convToString(total, next, operation)

  return convToString(total, next, operation);
};

export default Calculate;
