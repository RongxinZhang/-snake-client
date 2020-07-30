const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  EXIT_KEY} = require('./constants');
let connection;

const handleUserInput = function(key) {
  console.log("typing", key);
  if (key === EXIT_KEY) {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    console.log("uo");
    connection.write("Move: up");
  }
  if (key === MOVE_DOWN_KEY) {
    console.log("down");
    connection.write("Move: down");
  }
  if (key === MOVE_LEFT_KEY) {
    console.log("left");
    connection.write("Move: left");
  }
  if (key === MOVE_RIGHT_KEY) {
    console.log("d");
    connection.write("Move: right");
  }
  if (key === "1") {
    console.log("message");
    connection.write("Say: hi");
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