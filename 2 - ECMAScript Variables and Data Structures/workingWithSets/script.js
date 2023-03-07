// similar to objs but must be unique
// methods similar to maps

let books = new Set();
books.add("Pride and Prejudice");
books.add("1984");

console.log(books);
console.log(books.size);
console.log("has Oliver Twist?", books.has("Oliver Twist"));

books.delete("1984");
books.add("1984");
books.add("1984"); //does nothing bc must be unique - doesnt raise a warning, either

// loop via forEach
books.forEach(function (item) {
  console.log(item);
});
