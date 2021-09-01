const palindromes = (str) => {

  // regex
  const re = /[\W_]/g;

  // argument converted to lowercase and regular expression rules applied
  let smallStr = str.toLowerCase().replace(re, '');

  // smallStr variable reversed to check palidrome
  let reverseStr = smallStr.split('').reverse().join('');

  if (smallStr === reverseStr) {
    return true;
  } else {
    return false;
  }
};



module.exports = palindromes;