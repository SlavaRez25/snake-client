


const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address
    port: PORT // PORT number 
  });



  // Message on screen that connection is successful and write in the Server the  Name of the snake
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: S.R'); // writes my initials to the server snake
  });



  // moved the conn objects for the move keys into inputjs
  
  
  
  // Receive a message from server
  conn.on('data', (data) => {
    console.log('Incomming data from server: ', data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


// exporting the function
module.exports = { connect };