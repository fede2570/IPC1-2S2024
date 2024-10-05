const Estudiante = require('../models/Estudiante')
const {listaEstudiantes} = require('../database/database')

const registroEstudiante = (req, res) => {
    const {carnet, nombre, correo, password} = req.body;
    const estudiante = new Estudiante(carnet, nombre, correo, password);
    listaEstudiantes.push(estudiante)
    res.status(200).json({msg: "El estudiante se registro correctamente"})
}

const verEstudiantes = (req, res) => {
    res.status(200).json(listaEstudiantes)
}

const registroProfesores = (req, res) => {
    
}

module.exports = {
    registroEstudiante,
    registroProfesores,
    verEstudiantes
}