const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542
  });


  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data)// code that does something when the connection is first established
  });

  return conn;
};
console.log("Connecting ...");
connect();
module.exports = connect;