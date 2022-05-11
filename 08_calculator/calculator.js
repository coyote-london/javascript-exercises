const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
  return (num1 - num2);
	
};

const sum = function(array) {
  if (array.length < 1){
    return 0;
  }
  else {
    return array.reduce((a, b) => a + b);
  }

};

const multiply = function(array) {
  if (array.length < 3) return array[0] * array[1];
  else return array.reduce((a,b)=> a * b);

};

const power = function(base, exponate) {
  return Math.pow(base, exponate);
	
};

const factorial = function(num) {
  let output = num;
  if (num == 1 || num == 0) return 1;
  else 
    for (i = num - 1; i > 1; i--) {
      output = output * i;
    }
  return output;
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
