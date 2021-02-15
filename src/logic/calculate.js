import Operate from './operate.js';

const Calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj

  switch (btnName) {
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '+/-': {
      (total *= -1).toString();
      (next *= -1).toString();
      break;
    }
    case '%': {
      (total *= 0.1).toString()
      break;
    }
  }
  return { total, next, operation }
}

// let result = Calculate({ total: 34, next: 4, operation: '+' }, "%")
// console.log(result);
let divide = Operate(200, 20, '÷');
console.log(divide);
// export default Calculate;
