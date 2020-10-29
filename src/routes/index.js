const express = require('express');

const app = express();

app.use('/auth', require('./auth'));
app.use('/bebida', require('./bebida'));

module.exports = app;