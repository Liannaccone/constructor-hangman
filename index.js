var Word = require("./word.js");

var wordArr = ["bodhi", "mallard", "sweetgirl"]

// randomly select a number between 0 and the length of WordArr - 1
var randomNum = Math.floor(Math.random() * wordArr.length)

// assign wordArr[randomNum] to activeWord generate a new word
var activeWord = wordArr[randomNum]
console.log(activeWord);
