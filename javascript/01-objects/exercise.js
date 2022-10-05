function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;
  this.info = () => `${title} by ${author}, ${page} of pages and ${isRead}`;
}

const theHobbit = new Book("The Hobbit", "Tolkien", "500", "not read it yet.");

console.log(theHobbit.info());
