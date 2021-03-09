import configureSocket from './socket/index.js';
import router from './routes/index.js';
import express from 'express';
import path from 'path';
import http from 'http';

const app = express();

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.dirname('') + '../public'));

export default app;
