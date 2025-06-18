/* INSTRUCTIONS:

1) Create an array containing 5 words (Tree species? Candy bars?)
2) Use a While loop to print each word to the console.
3) End the program by writing "Thats all!" to the console. 

HINT: 'arrayname.length' will return the length of the number of elements in an array.

*/
let words = ["Maple", "Oak", "Pine", "Birch", "Cedar"];
let i = 0;
while (i < words.length) {
  console.log(words[1]);  // Always logs "Oak"
  i++;
}
console.log("That's all!");
