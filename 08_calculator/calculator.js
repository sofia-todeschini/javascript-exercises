const add = function(...args) {
  let sum = 0
	args.forEach((arg) => sum += arg)
  return sum
};

const subtract = function(...args) {
	let value = args[0]
  args.slice(1).forEach((arg) => value -= arg)
  return value
};

const sum = function(array) {
	let sum = 0
  array.forEach((elem) => sum += elem)
  return sum
};

const multiply = function(array) {
  let value = 1
  array.forEach((elem) => value *= elem)
  return value
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(number) {
	let fact = 1
  for (let i = 1; i <= number; i++) {
    fact *= i
  }
  return fact
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
