const express = require('express');
const morgan = require('morgan');
const favoritesRouter = require('./routes/favorites.router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/favorites', favoritesRouter);

module.exports = app;
