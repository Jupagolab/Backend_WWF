const conectar = require('../config/database.js');
const mysql = require('mysql2');

//CRUD
const registrarMsj = (req, res) => {
    const { nombre, correo, asunto, mensaje } = req.body;

    const consultaRegistrar = `INSERT INTO mensajes (nombre, correo, asunto, mensaje) VALUES(?, ?, ?, ?);`

    const registrar = mysql.format(consultaRegistrar, [nombre, correo, asunto, mensaje]);

    conectar.query(registrar, (err, resultado) => {
        if (err){
            throw err;
        }
        res.json({messege: 'mensaje creado'});
    });
};

module.exports = registrarMsj;