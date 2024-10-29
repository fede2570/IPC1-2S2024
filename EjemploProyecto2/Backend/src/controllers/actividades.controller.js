const {listaCursos} = require('../database/database')
const Actividad = require('../models/Actividad')
const Nota = require('../models/Nota')

const cargarActividades = (req, res) => {

    const codigo_curso = req.params.codigo_curso;
    const jsonData = req.body;
    
    const objetoCurso = listaCursos.find(curso => curso.codigo == codigo_curso)

    /*
    {
        "nombre": "Tarea 1",
        "descripcion": "Investigación sobre algoritmos de búsqueda.",
        "ponderacion": 25,
        "profesor": "ECYS1",
        "notas": [
            {"carnet": 2019, "nota": 85},
            {"carnet": 2020, "nota": 90},
            {"carnet": 2021, "nota": 75}
        ]
    } */
    if (objetoCurso) {
        for (const data of jsonData) {
            const actividad = new Actividad(data.nombre, data.descripcion, data.ponderacion)
            for (const nota of data.notas) {
                const objnota = new Nota(nota.carnet, nota.nota)
                actividad.listaNotas.push(objnota)
            }
            objetoCurso.listaActividades.push(actividad)
        }
        console.log(objetoCurso.listaActividades)
        return res.json({msg: "Se cargaron las tareas"})
    } else {
        return res.json({msg: "Error al cargar tareas"})
    }
}

const verActividades = (req, res) => {

    const codigo_profesor = req.params.codigo_profesor;
    
    const listaCursoProfesor = listaCursos.filter(curso => curso.codigo_profesor == codigo_profesor)

    const nuevaLista = []
    for (const curso of listaCursoProfesor) {
        for (const actividad of curso.listaActividades) {
            let promedio = 0;
            let suma = 0;
            let contador = 0
            for (const nota of actividad.listaNotas) {
                suma += nota.nota
                contador++
            }        
            promedio = suma / contador
            //Crear objeto nuevo
            const nuevaActividad = {
                nombre: actividad.nombre,
                descripcion: actividad.descripcion,
                promedio: promedio
            }
            nuevaLista.push(nuevaActividad)
        }
    }
    return res.json(nuevaLista)
}

module.exports = {
    cargarActividades,
    verActividades
}