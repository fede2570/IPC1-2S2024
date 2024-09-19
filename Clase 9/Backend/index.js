const express = require("express");
const cors = require("cors");

const app = express()

/*  function nombre() {

    }

    const nombre = function() {

    }

    const nombre = () => {

    }
*/

/*
* req es la peticion que envia el cliente al servidor, la peticion puede ser un json
* res es la respuesta que se envia el servidor al cliente
*/
const obtenerLibro = (req, res) => {

    //Objeto en javascript
    //json es un objeto
    let objeto = {
        "nombre": "Libro1",
        "precio": 50
    }
    //Se envia respuesta de json a cliente (frontend, thunderclient o postman)
    res.json(objeto)
}

//Asignar metodo de peticion a funcion
//Metodo peticion GET
//Consumir endpoint en ruta del navegador, postman o thunderclient http://localhost:3000/obtenerlibro
app.get('/obtenerlibro', obtenerLibro);

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto 3000')
})