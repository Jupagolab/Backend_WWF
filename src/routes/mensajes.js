const { Router } = require('express');
const registrarMsj = require('../controllers/mensaje.js');

//crear router
const routerMsj = Router();

// --------------- POST --------------
routerMsj.post('/', registrarMsj);

module.exports = routerMsj;