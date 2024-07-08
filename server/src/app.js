const express = require('express');
const morgan = require('morgan');
const chairRouter = require('./routers/chairRouter');
const authRouter = require('./routers/authRouter');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routers/tokensRouter');

const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/chairs', chairRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);

module.exports = app;
