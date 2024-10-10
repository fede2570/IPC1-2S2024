const Estudiante = require('../models/Estudiante')
const Profesor = require('../models/Profesor')
const {listaEstudiantes, listaProfesores} = require('../database/database')

const registroEstudiante = (req, res) => {
    const {carnet, nombre, correo, password} = req.body;
    const estudiante = new Estudiante(carnet, nombre, correo, password);
    listaEstudiantes.push(estudiante)
    res.status(200).json({msg: "El estudiante se registro correctamente"})
}

const verEstudiantes = (req, res) => {
    res.status(200).json(listaEstudiantes)
}

const login = (req, res) => {

    /*
    {
        "codigo": "user1",
        "password": "123",
        "rol": "admin"
    }    
    */
    const {codigo, password, rol} = req.body;

    let usuario;

    if (rol == "estudiante") {
        usuario = listaEstudiantes.find(user => user.carnet === codigo && user.password == password)
    } else if (rol == "profesor") {
        usuario = listaProfesores.find(user => user.codigo == codigo && user.password == password)
    } else {
        usuario = {
            "usuario": "admin",
            "nombre": "admin"
        }
    }
    if (!usuario) {
        return res.json({msg: "Error de usuario o contraseña", ok: false})
    } else {
        return res.json({msg: 'Se logueo correctamente', usuario: usuario, rol: rol, ok: true})
    }

}

const cargarProfesores = (req, res) => {

    const jsonData = req.body;
    console.log(jsonData)
    /*
    {
        "codigo": "PROF1",
        "nombre": "profesor1",
        "password": "123"
    }
    */

    for (const data of jsonData) {
        const profesor = new Profesor(data.codigo, data.nombre, data.password)
        listaProfesores.push(profesor)
    }
    res.json({msg: "Se registraron los profesores"})
}

const verProfesores = (req, res) => {
    res.json(listaProfesores)
}

const eliminarProfesor = (req, res) => {

    const codigo = req.params.codigo;

    const posicionUsuario = listaProfesores.findIndex(user => user.codigo == codigo)

    if (posicionUsuario == -1) {
        return res.json({msg: 'No existe el usuario'})
    } else {
        listaProfesores.splice(posicionUsuario, 1)
        return res.json({msg: 'Se elimino el usuario'})
    }
}

const registroProfesores = (req, res) => {
    
}

module.exports = {
    registroEstudiante,
    registroProfesores,
    verEstudiantes,
    login,
    cargarProfesores,
    verProfesores,
    eliminarProfesor
}