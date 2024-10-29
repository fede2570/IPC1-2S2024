import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PaginaCurso = () => {

    const [jsonData, setJsonData] = useState([])
    const [actividades, setActividadades] = useState([])

    const {codigo, nombre, password} = JSON.parse(localStorage.getItem("profesor"))

    const handleFileJSON = (e) => {
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = (event) => {
            const json = JSON.parse(event.target.result)
            handleCargarCurso(json)
        }
    }
    //Codigo del curso
    const {idcurso} = useParams()

    const handleCargarCurso = (json) => {
        axios.post('http://localhost:4000/asignarCurso/' + idcurso, json)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => console.log(error))
    }

    const handleVerEstudiantesCurso = () => {
        axios.get('http://localhost:4000/verEstudiantesCurso/' + idcurso)
        .then(response => {
            console.log(response.data)
            setJsonData(response.data)
        }).catch(error => console.log(error))
    }

    const handleFileJSONActividades = (e) => {
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = (event) => {
            const json = JSON.parse(event.target.result)
            handleCargarActividades(json)
        }
    }

    const handleCargarActividades = (json) => {
        axios.post('http://localhost:4000/cargarActividades/' + idcurso ,json)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => console.log(error))
    }

    //Actividades de profesor
    const handleVerActividades = () => {
        axios.get('http://localhost:4000/verActividadesProf/' + codigo)
        .then(response => {
            setActividadades(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        handleVerEstudiantesCurso()
        handleVerActividades()
    }, [])

    return (
        <>
            <h1>Curso {idcurso}</h1>
            <input type="file" onChange={handleFileJSON}/>

            <table>
                <thead>
                    <tr>
                        <th>Carnet</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jsonData.length > 0 ? (
                            jsonData.map(item => (
                                <tr>
                                    <td>{item.carnet}</td>
                                </tr>
                            ))
                        ): (
                            <tr><td></td></tr>
                        )
                    }
                </tbody>
            </table>

            <input type="file" onChange={handleFileJSONActividades}/>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Promedio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        actividades.map(item => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.nombre}</td>
                                        <td>{item.descripcion}</td>
                                        <td>{item.promedio}</td>
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

export default PaginaCurso