
let connection;

const handleUserInput = data => {
  const ctrlC = "\u0003";
  const up = "\u0077";
  const down = "\u0073";
  const right = "\u0064";
  const left = "\u0061";
  const mesOne = "\u0031";
  const mesTwo = "\u0032";
  const mesThr = "\u0033";
  const mesFou = "\u0034";
  const mesFiv = "\u0035";
  const mesSix = "\u0036";
  const mesSev = "\u0037";
  const mesEig = "\u0038";
  const mesNin = "\u0039";
  const mesZer = "\u0030";

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
    connection.write('Say: What gives life meaning?');
    break;
  case mesTwo:
    connection.write('Say: Where does hope come from?');
    break;
  case mesThr:
    connection.write('Say: God has abandoned his flock. 👿');
    break;
  case mesFou:
    connection.write('Say: What gives you the right to judge ME?');
    break;
  case mesFiv:
    connection.write('Say:Sound like YOU have the attitude problem. 🙄');
    break;
  case mesSix:
    connection.write(`Say: When a tree falls in the forest NO ONE CARES 😭`);
    break;
  case mesSev:
    connection.write(`'Say: This is the way the world ends, not with a bang, but with a whimper'`);
    break;
  case mesEig:
    connection.write('Say: Have you read any Edgar Allen Poe?');
    break;
  case mesNin:
    connection.write("Say: Drink water!");
    break;
  case mesZer:
    connection.write("Say: Get up and move around!");
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