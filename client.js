const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542
  });


  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected to the game")// code that does something when the connection is first established

    conn.write('Name: beb');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 1000)
    
  });

  conn.on("data", data => {
    console.log(data)// code that does something when the connection is first established
  });

  return conn;
};

module.exports = connect;