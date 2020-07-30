const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.64',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("error", err=>{
    console.log("err:",err);
  });

  conn.on("data", data=>{
    console.log("data:", data);
  });

  return conn;
};

module.exports = {connect};