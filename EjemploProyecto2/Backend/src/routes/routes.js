const usuarioControllers = require('../controllers/usuarios.controller');
const cursoControllers = require('../controllers/cursos.controller')
const actividadesControllers = require('../controllers/actividades.controller')

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

router.get('/verEstudiantesCurso/:codigo_curso', usuarioControllers.verEstudiantesCurso)

router.post('/cargarActividades/:codigo_curso', actividadesControllers.cargarActividades)
router.get('/verActividadesProf/:codigo_profesor', actividadesControllers.verActividades)


router.get('/verCursosEstudiante/:carnet', cursoControllers.verCursosEstudiantes)

module.exports = router;