import { useState } from "react";
import axios from 'axios'

const Login = () => {

    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [rol, setRol] = useState("")

    const handleChangeUsuario = (event) => {
        console.log(event.target.value)
        setUsuario(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeRol = (event) => {
        console.log(event.target.value)
        setRol(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        axios.post('http://localhost:4000/login', {
            codigo: usuario,
            password: password,
            rol: rol
        }).then(response => {
            if (response.data.ok) {

                //localStorage.setItem("usuario", JSON.stringify(response.data.usuario))

                if (response.data.rol == "admin") {
                    localStorage.setItem("admin", JSON.stringify(response.data.usuario))
                    alert('Bienvenido administrador')
                    return window.location.href = "/admin"
                } else if (response.data.rol == "profesor") {
                    localStorage.setItem("profesor", JSON.stringify(response.data.usuario))
                    alert('Bienvenido profesor')
                    return window.location.href = "/profesor"
                } else if (response.data.rol == "estudiante") {
                    localStorage.setItem("estudiante", JSON.stringify(response.data.usuario))
                    return window.location.href = "/estudiante"
                }
            } else {
                alert("Eror de usuario o contraseña")
            }
        })
    }

    return (
        <>
            <div className="container grey lighten-4">
                <h1>Inicio Sesion</h1>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <form onSubmit={handleLogin}>
                                <div className="card-content">
                                    <input onChange={handleChangeUsuario} type="text" placeholder="Ingrese usuario"/>
                                </div>
                                <div className="card-content">
                                    <input onChange={handleChangePassword} type="password" placeholder="Ingrese contraseña"/>
                                </div>
                                <div className="card-content">
                                    <p>
                                        <label>
                                        <input class="with-gap" name="group3" 
                                        type="radio" value={"admin"}
                                        onChange={handleChangeRol}
                                        />
                                        <span>Administrador</span>
                                        </label>
                                    </p>
                                    
                                    <p>
                                        <label>
                                        <input class="with-gap" name="group3" 
                                        type="radio" value={"profesor"}
                                        onChange={handleChangeRol}
                                        />
                                        <span>Profesor</span>
                                        </label>
                                    </p>

                                    <p>
                                        <label>
                                        <input class="with-gap" name="group3" 
                                        type="radio" value={"estudiante"}
                                        onChange={handleChangeRol}
                                        />
                                        <span>Estudiante</span>
                                        </label>
                                    </p>


                                </div>

                                <div className="card-action">
                                    <button className="btn waves-effect waves-light" type="submit">Iniciar Sesion</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;