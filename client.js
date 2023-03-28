


const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: 50541 // PORT number here,
  });

  const handleUserInput = function (key) {
    // console.log('ctrl + c is pressed');
    if (key === '\u0003') {
      process.exit;
    }
  }

  // setup interface to handle user input from stdin
  const setupInput = function () {
    const stdin = process.stdin;
    stdin.on('data', handleUserInput);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

  // process.stdin.on('data', handleUserInput);

  // Message on screen that connection is successful and write on Server Name of the snake
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: S.R')
  });



  // Movement keys for Snake
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 1000);
  // });

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 4000);
  // });
  
  // conn.on('connect', () => {
  //   conn.write('Move: down');
  // });
  
  // conn.on('connect', () => {
  //   conn.write('Move: left');
  // });

  // conn.on('connect', () => {
  //   conn.write('move: right');
  // });
  
  // Receive a message from server
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