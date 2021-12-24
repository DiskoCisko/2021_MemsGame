import React, {useState} from "react";
import './dice.css'
const Dice = () => {
    const [dice, setDice] = useState(null);
    return <div className="dice">
        <button className="dice__btn" onClick={()=>{
            setDice(Math.ceil(Math.random()*6))
        }}>{(dice)?dice:"Нажми"}</button>
    </div>
}

export default Dice;