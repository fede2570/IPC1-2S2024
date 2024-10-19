import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

const PaginaCurso = () => {

    const [jsonData, setJsonData] = useState([])

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

    return (
        <>
            <h1>Curso {idcurso}</h1>
            <input type="file" onChange={handleFileJSON}/>
        </>
    )
}

export default PaginaCurso