const { ctrlC, up, down, right, left, mesOne, mesTwo, mesThr, mesFou, mesFiv, mesSix, mesSev, mesEig, mesNin, mesZer } = require('./constants');
let connection;

const handleUserInput = data => {


  switch (data) {
  case ctrlC:
    process.exit();
    break;
  case up:
    connection.write("Move: up");
    break;
  case down:
    connection.write("Move: down");
    break;
  case right:
    connection.write("Move: right");
    break;
  case left:
    connection.write("Move: left");
    break;
  }
  switch (data) {
  case mesOne:
    connection.write('Say: Does life mean?');
    break;
  case mesTwo:
    connection.write('Say: Does hope come?');
    break;
  case mesThr:
    connection.write('Say: God has abandoned. 👿');
    break;
  case mesFou:
    connection.write('Say: The right to judge ME?');
    break;
  case mesFiv:
    connection.write('Say: YOU have the attitude problem. 🙄');
    break;
  case mesSix:
    connection.write(`Say: NO ONE CARES 😭`);
    break;
  case mesSev:
    connection.write(`Say: 'But with a whimper'`);
    break;
  case mesEig:
    connection.write('Say: Edgar Allen Poe!');
    break;
  case mesNin:
    connection.write("Say: Drink water!");
    break;
  case mesZer:
    connection.write("Say: Get up and move!");
    break;
  }
};



const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  connection = conn;
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;