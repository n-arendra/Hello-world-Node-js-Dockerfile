'use strict';

const express = require('express');

//constants
const PORT = 8080;
const HOST = '0.0.0.0';

//apps
const app = express();
app.get('/', (req, res) => {
  res.send('Houdy Modi. You are the BOSS. Welcome to Australia.\n');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT} Port is 8080');
