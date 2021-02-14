
const Calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj
  // 'AC', '+/-', '%', '÷'
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
      total *= 0.1
      break;
    }
  }
  return { total, next, operation }
}

let result = Calculate({ total: 34, next: 4, operation: '+' }, "AC")
console.log(result);
// export default Calculate;