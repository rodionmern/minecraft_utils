// import React from "react"
import { Link } from "react-router-dom"

import "./Home.css"

import Kopeechka from "../../ui/Kopeechka/Kopeechka"
import Frame from "../../ui/Frame/Frame"
import Button from "../../ui/Button/Button"

const Home = () => {
  return (
    <Kopeechka>
        <h1>Minecraft Utils</h1>
        <div className="nepridymal">
            <div className="neprid">
                <Frame icon="src\assets\img\obsidian.png"></Frame>
                <Button><Link to="/nether" className="link">Nether</Link></Button>
            </div>
            <div className="neprid">
                <Frame icon="src\assets\img\end_portal_frame.png"></Frame>
                <Button><Link to="/end" className="link">End</Link></Button>
            </div>
        </div>
    </Kopeechka>
  )
}

export default Home