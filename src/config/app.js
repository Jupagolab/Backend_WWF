const express = require('express');
const cors = require('cors');

const routerMsj = require('../routes/mensajes.js')

const app = express();

//middleware(intermediario)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//endpoints
app.use('/msj', routerMsj);

module.exports = app;