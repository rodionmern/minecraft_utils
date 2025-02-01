import { useState } from "react"

import "./Nether.css"

import Kopeechka from "../../ui/Kopeechka/Kopeechka"
import Select from "../../ui/Select/Select"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"

const Nether = ( {  } ) => {
    const [selectValue, setSelectValue] = useState('1')
    const [x, setX] = useState('')
    const [z, setZ] = useState('')

    var xResult = 'Ящики'
    var zResult = 'Бука'

    const xChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setX(event.target.value);
    };
    
    const zChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZ(event.target.value);
    };

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
        alert(event.target.value)
    };

    const fingCoordinates = () => {
        if (selectValue == "1") {
            xResult = (Number(x) * 8).toString()
            zResult = (Number(z) * 8).toString()
            alert(`${xResult} ${zResult}`)
        } else {
            xResult = (Number(x) / 8).toString()
            zResult = (Number(z) / 8).toString()
            alert(`${xResult} ${zResult}`)
        }
    }

    return (
        <Kopeechka>
            <h1>Nether coordinates</h1>
            <div className="dsa">
                <Select name="nether" onChange={selectChange}>
                    <option value="1">Nether:Overworld</option>
                    <option value="2">Overworld:Nether</option>
                </Select>
                <div>
                    <Input placeholder="X" value={x} onChange={xChange}></Input>
                    <Input placeholder="Z" value={z} onChange={zChange}></Input>
                    <Button><a onClick={fingCoordinates}>Find</a></Button>
                </div>
            </div>
        </Kopeechka>

    )
}

export default Nether