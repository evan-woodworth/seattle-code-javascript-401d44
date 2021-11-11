'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000');

socket.on('publish', (payload) => {
  console.log(payload);
  socket.emit('received', payload);
});