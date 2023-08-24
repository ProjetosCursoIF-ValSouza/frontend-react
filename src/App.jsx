import Home from "./components/pages/Home"

import "./App.css"
import { Routes } from "react-router-dom"


const App = () => {
  return (
    <Routes>
      <Route> path="/" element={<Home/>} />
      <Route> path="/quem somos" element={<QuemSomos/>} />
      <Route> path="element"={<Contato/>} />
    </Routes>
     )
}

export default App