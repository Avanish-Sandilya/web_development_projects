export default function Header(props){
    return(
        <div class="header">
            <h1>
                Memory Card
            </h1>
            <h4>
                Score: {props.score}
                <br />
                HighScore:{props.highScore}
            </h4>
        </div>
    )
}