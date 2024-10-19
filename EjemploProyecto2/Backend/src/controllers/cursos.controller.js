const Curso = require('../models/Curso')
const {listaCursos} = require('../database/database')

const cargarCursos = (req, res) => {

    /*
    [
        {
            "codigo": 103,
            "nombre": "Mate 2",
            "codigo_profesor": "PROF1"
        },
        {
            "codigo": 107,
            "nombre": "Inter 1",
            "codigo_profesor": "PROF2"
        }
    ]
    */

    const jsonData = req.body;

    for (const data of jsonData) {
        const curso = new Curso(data.codigo, data.nombre, data.codigo_profesor)
        listaCursos.push(curso)
    }
    console.log(listaCursos)
    res.json({msg: "Se cargaron los cursos correctamente"})
}

const verCursos = (req, res) => {
    res.json(listaCursos)
}

module.exports = {
    cargarCursos,
    verCursos
}