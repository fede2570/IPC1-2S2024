const usuarioControllers = require('../controllers/usuarios.controller');
const express = require('express')

const router = express.Router()

router.post('/registroEstudiantes', usuarioControllers.registroEstudiante);
router.get('/verEstudiantes', usuarioControllers.verEstudiantes);

module.exports = router;