CREATE DATABASE bdwwf;

USE bdwwf;

CREATE TABLE mensajes(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    asunto VARCHAR(20),
    mensaje TEXT NOT NULL
);