const usuarioControllers = require('../controllers/usuarios.controller');
const express = require('express')

const router = express.Router()

router.post('/registroEstudiantes', usuarioControllers.registroEstudiante);
router.get('/verEstudiantes', usuarioControllers.verEstudiantes);
router.post('/login', usuarioControllers.login);
router.post('/cargarProfesores', usuarioControllers.cargarProfesores)
router.get('/verProfesores', usuarioControllers.verProfesores)
router.delete('/eliminarprof/:codigo', usuarioControllers.eliminarProfesor)

module.exports = router;