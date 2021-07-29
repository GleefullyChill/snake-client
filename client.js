const net = require("net");
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected to the game");// code that does something when the connection is first established

    conn.write('Name: emo');
    
  });

  conn.on("data", data => {
    console.log(data);// code that does something when the connection is first established
  });

  return conn;
};

module.exports = connect;