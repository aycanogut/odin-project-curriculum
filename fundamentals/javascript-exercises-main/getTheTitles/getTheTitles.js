const getTheTitles = function (title) {
  return title.map(book => book.title);
};

module.exports = getTheTitles;