import axios from "axios"
import { useState } from "react"
import NavBar from "./NavBar"

const CargarStudent = () => {

    const [jsonData, setJsonData] = useState([])

    const handleFileJSON = (e) => {
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = (event) => {
            const json = JSON.parse(event.target.result)
            console.log(json)
            handleCargarStudents(json)
        }
    }

    const handleCargarStudents = (json) => {
        axios.post('http://localhost:4000/cargarestudiantes', json)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => console.log(error))
    }

    return (
        <>
            <NavBar/>
            <h1>Cargar estudiantes</h1>
            <input type="file" onChange={handleFileJSON}/>
        </>
    )
}

export default CargarStudent