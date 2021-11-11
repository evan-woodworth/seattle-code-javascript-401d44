'use strict';

const socketio = require('socket.io');
const server = socketio(3000);

// socket connection event!
server.on('connection', socket => {
  console.log('Socket connection esablished: ' + socket.id);

  let messageQ = [];

  const eventPool = [
    'publish',
    'received',
  ];

  socket.on('publish', (payload) => {
    messageQ.push(payload.message);
    server.emit('publish', payload);
  })

  socket.on('received', (payload) => {
    const index = messageQ.indexOf(payload.message);
    if (index > 0) {
      messageQ.splice(index, 1);
    }
  })
});
