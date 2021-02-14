
const Calculate = (dataObj, btnName) => {
  const { total, next, operation } = dataObj
  // 'AC', '+/-', '%', '÷'
  switch (btnName) {
    case 'AC': {
      total = null;
      next = null;
      operation = null;
    }
    case '+/-': {
      (total *= -1).toString();
      (next *= -1).toString();
    }
    case '%': {
      total *= 0.1
    }
  }
  return { total, next, operation }
}

export default Calculate;