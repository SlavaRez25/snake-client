

const connect = require('./client')


// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (keyPress) {
  console.log('User pressed key.', keyPress);
  if (keyPress === '\u0003') {
    process.exit();
  }
};

const stdin = setupInput();

stdin.on("data", handleUserInput);



// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "10.0.2.15", // IP address here,
//     port: 50541 // PORT number here,
//   });

//   conn.on('data', (data) => {
//     console.log('Incomming data from server: ', data);
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("Connecting ...");
// connect();

