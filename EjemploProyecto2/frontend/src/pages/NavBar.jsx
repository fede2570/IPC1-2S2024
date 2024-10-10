import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
        <nav>
            <div class="nav-wrapper 1a237e indigo darken-4">
            <a href="#" class="brand-logo">USAC</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="#">Cargar Profesores</Link></li>
                <li><Link to="#">Cargar Estudiantes</Link></li>
                <li><Link>Cerrar Sesion</Link></li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;