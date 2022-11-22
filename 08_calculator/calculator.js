const add = function(...numbers) {
	let sum = 0;
  for(const num of numbers) {
    sum += Number(num);
  }
  return sum;
};

const subtract = function(...numbers) {
  let sub = Number(numbers[0]);
  for(let i = 1; i < numbers.length; i++) {
    sub = sub - Number(numbers[i]);
  }
  return sub;
};



const sum = function(numbers) {
	let sum = 0;
  for(const num of numbers) {
    sum += Number(num);
  }
  return sum;
};

const multiply = function(numbers) {
	let mult = 1;
  for(const num of numbers) {
    mult = mult * Number(num);
  }
  return mult;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  if (num === 0) {return 1};  
  let fact = num;
	for (let i = 1; i < num ; i++) {
     fact = fact * (num - i);
  }
  return fact;
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
