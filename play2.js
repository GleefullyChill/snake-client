const connect = require('./client');
const setupInput = require('./input');
let i = 0;
while(i<1000) {
  i++
// Connect to server
console.log("Connecting ...");
const conn = connect();

// setup stdin
const userInput = setupInput(conn);
}