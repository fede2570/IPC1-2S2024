import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const Admin = () => {

    const [jsonData, setJsonData] = useState([])

    const handleFileJSON = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = (event) => {
            handleCargarProfesores(JSON.parse(event.target.result))
        }
    }

    const handleCargarProfesores = (json) => {
        console.log("Llego aca")
        axios.post('http://localhost:4000/cargarProfesores', json)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => console.log(error))
    }

    const handleViewProfesores = () => {
        axios.get('http://localhost:4000/verProfesores')
        .then(response => {
            setJsonData(response.data)
        })
    }

    const handleEliminarProf = (codigo) => {
        axios.delete('http://localhost:4000/eliminarprof/' + codigo)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        handleViewProfesores()
    }, [])

    return (
        <>
            <NavBar/>
            <div>
                <h1>Administrador</h1>
                <input type="file" onChange={handleFileJSON}/>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jsonData.map(item => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.codigo}</td>
                                                <td>{item.nombre}</td>
                                                <td><button onClick={() => handleEliminarProf(item.codigo)}>Eliminar</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )

}

export default Admin;