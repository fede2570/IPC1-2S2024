import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import axios from 'axios'

const CargarCursos = () => {

    const [jsonData, setJsonData] = useState([])

    const handleFileJSON = (e) => {
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = (event) => {
            const json = JSON.parse(event.target.result)
            console.log(json)
            handleCargarCursos(json)
        }
    }

    const handleCargarCursos = (json) => {
        axios.post('http://localhost:4000/cargarCursos', json)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => console.log(error))
    }

    const handleViewCursos = () => {
        axios.get('http://localhost:4000/verCursos')
        .then(response => {
            setJsonData(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        handleViewCursos()
    }, [])

    return (
        <>
            <NavBar/>
            <h1>Cargar Cursos</h1>
            <input type="file" onChange={handleFileJSON}/>

            <table>
                <thead>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Profesor</th>
                </thead>
                <tbody>
                    {
                        jsonData.map(item => {
                            return (
                                <>
                                    <tr>
                                    <td>{item.codigo}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.codigo_profesor}</td>
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

export default CargarCursos