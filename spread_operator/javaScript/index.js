let books=["The Lean Strartup","Psychology Of Money","The Atomic Habits"];
let animes=["Attack On Titan","Demon Slayer","Hunter Hunter"];

//this will log out the content in form of nested arrrays.which we dont want.we want everthing in same array.
// let shows=["Dark","Money Heist","Friends","Big Bang Theory",books,animes];

//for that we use spread operator(...args)
let shows=["Dark","Money Heist","Friends","Big Bang Theory",...animes,...books];

console.log(shows);

