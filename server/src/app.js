const express = require('express');
const morgan = require('morgan');
const { createServer } = require('http');
const chairRouter = require('./routers/chairRouter');
const authRouter = require('./routers/authRouter');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routers/tokensRouter');
const upgradeCb = require('./ws/upgrade');
const wsServer = require('./ws/wsServer');
const connectionCb = require('./ws/connection');

const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/chairs', chairRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);

const server = createServer(app);

server.on('upgrade', upgradeCb);
wsServer.on('connection', connectionCb);

module.exports = server;
