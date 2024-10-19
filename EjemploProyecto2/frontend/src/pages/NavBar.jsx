import { Link } from "react-router-dom";

const NavBar = () => {

    const handleLogout = () => {
        localStorage.removeItem("usuario")
        return window.location.href = "/login"
    }

    return (
        <>
        <nav>
            <div class="nav-wrapper 1a237e indigo darken-4">
            <a href="#" class="brand-logo">USAC</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/admin">Cargar Profesores</Link></li>
                <li><Link to="/cargar-student">Cargar Estudiantes</Link></li>
                <li><Link to="/cargar-cursos">Cargar Cursos</Link></li>
                <li><Link onClick={handleLogout}>Cerrar Sesion</Link></li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;