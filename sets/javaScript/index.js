/*

The Set object lets you store unique values of any type, whether primitive values or object references.
Description

Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

*/

let books=new Set();
books.add("The Atomic Habits");
books.add("The Lean Startup").add("The Intelligent Investor.");

console.log(books);
console.log(books.size);

console.log("has Harry Potter?",books.has("Harry Potter"));

books.forEach(function (item)
{
    console.log(item);
});