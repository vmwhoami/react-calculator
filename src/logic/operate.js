import Big from 'big.js';


const Operate = (numberOne, numberTwo, operation) => {

  let numO = Big(numberOne)
  let numT = Big(numberTwo)
  switch (operation) {
    case '÷': {
      return numO.div(numT).toString()
    }
    case 'X': {
      return numO.mul(numT).toString()
    }
    case '-': {
      return numO.minus(numT).toString()
    }
    case '+': {
      return numO.plus(numT).toString()
    }
  }

}

export default Operate;


let divide = Operate(3, 5, '÷');
console.log(divide);