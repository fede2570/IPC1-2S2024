import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Profesor from './pages/Profesor';
import CargarCursos from './pages/CargarCursos';
import CargarStudent from './pages/CargarStudent';
import PaginaCurso from './pages/PaginaCurso';
import Estudiante from './pages/Estudiante';
import Graficas from './pages/Graficas';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/profesor' element={<Profesor/>}/>
          <Route path='/cargar-cursos' element={<CargarCursos/>}/>
          <Route path='/cargar-student' element={<CargarStudent/>}/>
          <Route path='/detalle-curso/:idcurso' element={<PaginaCurso/>}/>
          <Route path='/estudiante' element={<Estudiante/>}/>
          <Route path='/grafica1' element={<Graficas/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
