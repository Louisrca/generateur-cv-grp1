const express = require('express');
const app = express();

const bookRoutes = require('./curriculum');
const authRoutes = require('./auth');
const userRoutes = require('./users');

app.use('/users', userRoutes);
app.use('/curriculum', bookRoutes);
app.use('/auth', authRoutes);

module.exports = app;
