const express = require('express');
const morgan = require('morgan');
const postsRouter = require('./routes/postsRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/posts', postsRouter)

module.exports = app;
