let connection;

const handleUserInput = function(key) {
  console.log("typing", key);
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    console.log("uo");
    connection.write("Move: up");
  }
  if (key === "s") {
    console.log("down");
    connection.write("Move: down");
  }
  if (key === "a") {
    console.log("left");
    connection.write("Move: left");
  }
  if (key === "d") {
    console.log("d");
    connection.write("Move: right");
  }
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = {setupInput};