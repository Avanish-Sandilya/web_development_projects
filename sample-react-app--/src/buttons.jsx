function Button(props){
    const buttonStyle={
        color: props.color,
        fontSize:props.fontSize+'px'
    };
    return(
        <button style ={buttonStyle}>{props.text}</button>
    )
}

export default function Buttons(){
    return(
        <div>
            <Button text="Click Me" color="blue" fontSize={12}/>
        </div>
    )
}
