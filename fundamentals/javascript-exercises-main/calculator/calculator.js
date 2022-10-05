const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function ([...args]) {
  return args.reduce((acc, val) => {
    return acc += val;
  }, 0);
};

const multiply = function ([...args]) {
  return args.reduce((acc, val) => {
    return acc *= val;
  });
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};