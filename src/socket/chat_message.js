import { Socket } from 'socket.io';

const receiveMessage = (socket, messages) => {
  socket.on('chat message', (msgData) => {
    messages.push(msgData);

    console.log(messages);

    console.log(msgData);
  });
};

const sendMessage = (socket = Socket, ioServer) => {
  socket.on('chat message', (msgData) => {
    ioServer.emit('chat message', msgData);
  });
};

export { receiveMessage, sendMessage };
