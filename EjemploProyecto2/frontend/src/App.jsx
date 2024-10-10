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

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/profesor' element={<Profesor/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
