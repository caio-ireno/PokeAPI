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
  <div>
    <Menu/>
    <Component/>
  </div>
  )
}

export default App
