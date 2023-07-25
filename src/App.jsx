//En esta rut tenemos que importar el react router dom con las distintas rutas del proyecto.
import { Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PokeDetails from "./components/PokeDetails/PokeDetails";


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/:slug' element={<PokeDetails />} />
       </Routes>
    </div>
  )
}

export default App
