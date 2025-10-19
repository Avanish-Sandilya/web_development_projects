function ListItem(prop){
    return <li>{prop.animal}</li>
}

function List(prop){
    const animalList=prop.animals.map((animal)=><ListItem key={animal} animal={animal}/>);

    return(<ul>{animalList}</ul>);
}

function AnimalList(){
    const animals = ["Cow","Dog","Horse","Cat"];

    return(
        <>
        <h1>Animals</h1>
        <List animals={animals}/>
        </>
        
    )
}

export default AnimalList;