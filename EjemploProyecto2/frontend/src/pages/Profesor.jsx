import axios from "axios";
import { useEffect, useState } from "react";

const Profesor = () => {

    const [cursos, setCursos] = useState([])

    const {codigo, nombre, password} = JSON.parse(localStorage.getItem("profesor"))

    const handleViewCursos = () => {
        axios.get('http://localhost:4000/verCursosProf/' + codigo)
        .then(response => {
            setCursos(response.data)
        }).catch(error => {console.log(error)})
    }

    const handleDetalleCurso = (idcurso) => {
        return window.location.href = "/detalle-curso/" + idcurso
    }

    useEffect(() => {
        handleViewCursos()
    })

    return (
        <>
            <h1>Profesor</h1>
            <table>
                <thead>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Ver</th>
                </thead>
                <tbody>
                    {
                        cursos.map(item => {
                            return (
                                <>
                                <tr>
                                    <td>{item.codigo}</td>
                                    <td>{item.nombre}</td>
                                    <td><button onClick={() => handleDetalleCurso(item.codigo)}>Ver Curso</button></td>
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

export default Profesor;