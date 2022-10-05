const sumAll = function (x, y) {
  let arr = [];
  arr.push(x, y);
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  if ((x < 0 || x < 0) || (!Number.isInteger(x) || !Number.isInteger(y))) {
    return "ERROR";
  } else {
    return sumBetween;

  }
};


module.exports = sumAll;