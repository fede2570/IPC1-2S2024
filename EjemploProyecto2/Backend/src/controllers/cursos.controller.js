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

const verCursosEstudiantes = (req, res) => {
    const carnet = req.params.carnet;
    console.log("Llego a cursos estudiantes")
    const listaCursosEstudiante = listaCursos.filter(curso => 
        curso.listaEstudiantes.some(estudiante => estudiante.carnet == carnet)
    )
    console.log(listaCursosEstudiante)
    return res.json(listaCursosEstudiante)
}

module.exports = {
    cargarCursos,
    verCursos,
    verCursosEstudiantes
}