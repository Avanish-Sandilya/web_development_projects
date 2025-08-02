import { useState } from "react";

export default function Multiplier(){
    const[multiple,setMultiple]=useState(1);

    const handleClick=()=>{
        setMultiple(multiple*2);
    }

    const handleReset=()=>{
        setMultiple(1);
    }

    return(
        <div>
            <h1>Multiple:{multiple}</h1>
            <button onClick={handleClick}>Multiply X 2</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
