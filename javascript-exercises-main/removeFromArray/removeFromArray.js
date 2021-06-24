const removeFromArray = (...args) => {

  // first index of arguments(left array)
  const array = args[0];

  // empty array (to push unique items)
  const uniqueItems = new Array();

  // iterate on each items and check for duplicates
  array.forEach((item) => {
    if (!args.includes(item)) {
      uniqueItems.push(item);
    }
  });
  return uniqueItems;
};



module.exports = removeFromArray;