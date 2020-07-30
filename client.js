const { IP, PORT } = require('./constants');
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("error", err=>{
    console.log("err:",err);
  });

  conn.on("connect", connection=>{
    console.log("Connected");

    conn.write('Name: ZRX');
  });

  conn.on("data", data=>{
    console.log("data:", data);
  });

  return conn;
};

module.exports = {connect};