

let connection;

const handleUserInput = function (key) {
  console.log('this is the key', key);
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log( 'Up key was pressed');
    connection.write('Move: up');
  }
  if (key === 's') {
    console.log( 'Down key was pressed');
    connection.write('Move: down');
  }
  if (key === 'a') {
    console.log( 'Left key was pressed');
    connection.write('Move: left');
  }
  if (key === 'd') {
    console.log( 'Right key was pressed');
    connection.write('Move: right');
  }
}

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


  // Movement keys for Snake
  // conn.on('connect', () => {
  //   console.log('this is up key', key);
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   console.log('this  is down key', key);
  //   conn.write('Move: down');
  // });
  
  // conn.on('connect', () => {
  //   conn.write('Move: left');
  // });

  // conn.on('connect', () => {
  //   conn.write('move: right');
  // });

module.exports = { setupInput };