import { receiveMessage, sendMessage } from './chat_message.js';
import { Server, Socket } from 'socket.io';
import disconnect from './disconnet.js';

let messages = [];

const configureSocket = (server) => {
  const io = new Server(server);

  io.on('connection', (user = Socket) => {
    console.log(`User connected: ${user.id}`);

    user.emit('previous messages', messages);

    disconnect(user);

    receiveMessage(user, messages);

    sendMessage(user, io);
  });
};

export default configureSocket;
