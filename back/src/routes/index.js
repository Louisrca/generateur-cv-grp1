const express = require('express');
const app = express();

const bookRoutes = require('./books');
const authRoutes = require('./auth');
const userRoutes = require('./users');

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/auth', authRoutes);

module.exports = app;
