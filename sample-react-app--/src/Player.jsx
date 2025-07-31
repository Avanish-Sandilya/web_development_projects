function PlayerName(props) {
  return <li>{props.playerName}</li>;
}

function PlayerList(props) {
  return (
    <ul>
      {props.playerNames.map((playerName) => {
        return <PlayerName key={playerName} playerName={playerName} />;
      })}
    </ul>
  );
}

function Players(){
    const playerArray = ["Harry","Ravi","Max","Tim"];

    return(
        <div>
            <h1>Players</h1>
            <PlayerList playerNames={playerArray}/>
        </div>
    )
}

export default Players;
