const add = function(num1, num2) {
  let sum = num1+num2;
  return(sum);
};

const subtract = function(num1, num2) {
  let difference = num1-num2;
  return(difference);
	
};

const sum = function(array1) {
  const initVal = 0;
  const sumWithInit = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initVal
  );
	return(sumWithInit);
};

const multiply = function(array1) {
  const prodWithInit = array1.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
	return(prodWithInit);
};

const power = function(num1, num2) {
  let result = num1 ** num2;
  return(result);
};

const factorial = function(num1) {
  if (num1 === 1 || num1 === 0){
    return(1);
  }
 for (let i = num1 - 1; i > 1; i--){
  num1 = num1 * i;
 }
 return(num1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
