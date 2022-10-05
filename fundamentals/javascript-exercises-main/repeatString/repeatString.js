const repeatString = function (str, x) {
  if (x < 0) {
    return 'ERROR';
  } else if (x === 0) {
    return '';
  } else {
    return str.repeat(x);
  }
}
module.exports = repeatString;