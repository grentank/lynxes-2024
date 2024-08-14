const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const postsRouter = require('./routes/postsRouter');
const tokensRouter = require('./routes/tokens.router');
const authRouter = require('./routes/auth.router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/posts', postsRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);

module.exports = app;
