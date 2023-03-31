const express = require('express');
require ('dotenv').config();
const router = require('./routes/index.js');
const morgan = require('morgan');


const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan('dev'));

server.use('/', router);


server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});

