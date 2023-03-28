


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