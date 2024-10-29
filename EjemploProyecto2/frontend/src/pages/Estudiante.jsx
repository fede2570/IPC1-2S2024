import axios from "axios"
import { useEffect, useState } from "react"

const Estudiante = () => {

    const [cursos, setCursos] = useState([])

    const {carnet, nombre, correo, password} = JSON.parse(localStorage.getItem("estudiante"))

    const handleVerCursos = () => {
        axios.get('http://localhost:4000/verCursosEstudiante/' + carnet)
        .then(response => {
            console.log(response.data)
            setCursos(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        handleVerCursos()
    }, [])


    return (
        <>
            <h1>Modulo Estudiantes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Ver</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cursos.map(item => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.codigo}</td>
                                        <td>{item.nombre}</td>
                                        <td><button>Ver Curso</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Estudiante