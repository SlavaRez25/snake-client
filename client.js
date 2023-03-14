


const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: S.R')
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });
  
  conn.on('data', (data) => {
    console.log('Incomming data from server: ', data);
  });

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };