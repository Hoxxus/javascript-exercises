const sumAll = function(a, b) {
  
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  
  const numbers = [a, b];
  numbers.sort(function (x, y) {return x-y});

  let sum = 0;
  for (let i = numbers[0]; i <= numbers[1]; i++) {
    sum += i;    
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

