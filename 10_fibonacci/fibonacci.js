const fibonacci = function(num) {
  num = Number(num);
  if (num < 0) {return "OOPS"}

  const fib = [1, 1,];
  const counter = num - 2;
  for (let i = 0; i < counter; i++) {
    fib.push(fib[i] + fib[i+1]);
  }

  return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
