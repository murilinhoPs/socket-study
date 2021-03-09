import http from 'http';
import app from './app.js';
import configureSocket from './socket/index.js';

const httpServer = http.createServer(app);

configureSocket(httpServer);

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
