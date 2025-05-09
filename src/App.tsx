import { Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home/Home"
import Nether from "./components/pages/Nether/Nether"
import End from "./components/pages/End/End"

import Kopeechka from "./components/ui/Kopeechka/Kopeechka"
import Footer from "./components/ui/Footer/Footer"

function App() {
  return (
    <>
      <Kopeechka>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/nether" element={<Nether/>}></Route>
          <Route path="/end" element={<End/>}></Route>
        </Routes>
      </Kopeechka>
      <Footer></Footer>
    </>
  )
}

export default App
