const express = require('express');
const app = express();

const curriculumRoutes = require('./curriculum');
const authRoutes = require('./auth');
const userRoutes = require('./users');
const uploadRoutes = require('./uploadImage');
const recommandations = require('./recommandations');

app.use('/users', userRoutes);
app.use('/curriculum', curriculumRoutes);
app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);
app.use('/recommandations', recommandations)


module.exports = app;
