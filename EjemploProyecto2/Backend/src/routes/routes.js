const usuarioControllers = require('../controllers/usuarios.controller');
const cursoControllers = require('../controllers/cursos.controller')
const express = require('express')

const router = express.Router()

router.post('/registroEstudiantes', usuarioControllers.registroEstudiante);
router.get('/verEstudiantes', usuarioControllers.verEstudiantes);
router.post('/login', usuarioControllers.login);
router.post('/cargarProfesores', usuarioControllers.cargarProfesores)
router.get('/verProfesores', usuarioControllers.verProfesores)
router.delete('/eliminarprof/:codigo', usuarioControllers.eliminarProfesor)
router.post('/cargarestudiantes', usuarioControllers.cargarEstudiantes)

router.post('/cargarCursos', cursoControllers.cargarCursos)
router.get('/verCursos', cursoControllers.verCursos)

router.post('/asignarCurso/:codigo_curso', usuarioControllers.asignarEstudianteCurso)
router.get('/verCursosProf/:codigo_profesor', usuarioControllers.verCursosProfesor)

module.exports = router;