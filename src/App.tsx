import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'
import Regiao from './components/Regiao'
import Tipo from './components/Tipo'
import Pokedex from './components/Pokedex'
import Home from './components/Home'

import './main.css'

function App() {
  const { pathname } = window.location;
  let Component;
  if (pathname === '/regiao') {
    Component = Regiao;
  } else if (pathname === '/tipo'){
    Component = Tipo;
  } else if (pathname === '/pokedex') {
    Component = Pokedex;
  } else {
    Component = Home;

  }

  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tipo" element={<Tipo />} />
      <Route path="regiao" element={<Regiao />} />
      <Route path="pokedex" element={<Pokedex />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
