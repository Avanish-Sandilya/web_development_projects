import { useState } from "react";

export default function Person({name,age}){
    const [person,setPerson]=useState({name:name,age:age});


    const handleAgeIncrease=()=>{
        const newPerson={name:person.name,age:person.age+1};
        setPerson(newPerson);
    }

    return(
        <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleAgeIncrease}>Increase age</button>
        </>
    )
}