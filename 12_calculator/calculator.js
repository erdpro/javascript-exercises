const add = function(...numbers) {
	return numbers[0] + numbers[1];
};

const subtract = function(...numbers) {
	return numbers[0] - numbers[1];
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => total*current, 1)
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let sum = 1;
  for (let i = a; i > 0; i--) {
    sum *= i;
  }
  return sum;
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
