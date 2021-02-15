import Operate from "./operate";

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

let result = Calculate({ total: 34, next: 4, operation: '+' }, "%")
console.log(result);
// export default Calculate;
