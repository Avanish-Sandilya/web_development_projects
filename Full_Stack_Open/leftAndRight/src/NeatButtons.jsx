import { useState } from "react"

const NeatButtons=()=>{
    const [clicks,setClicks]=useState({
        left:0,
        right:0
    })


    const handleLeftClick=()=>{
        const newClicks={
            ...clicks,
            left:clicks.left+1
        }
        setClicks(newClicks)
    }

    const handleRightClick=()=>{
        const newClicks={
            ...clicks,
            right:clicks.right+1
        }
        setClicks(newClicks)
    }

    const handleReset=()=>{
        const newClicks={
            left:0,
            right:0
        }

        setClicks(newClicks)
    }


    return(
        <>
        {clicks.left}
        <button onClick={handleLeftClick} >left</button>
        <button onClick={handleRightClick} >Right</button>
        {clicks.right}
        <button onClick={handleReset} >Reset</button>
        </>
    )

}

export default NeatButtons;