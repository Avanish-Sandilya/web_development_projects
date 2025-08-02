function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return (
    <button onClick={props.handleCLick} style={buttonStyle}>
      {props.text}
    </button>
  );
}

function Redirect() {
  const handleClickEvent = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Button
        text="Goto Google"
        color="blue"
        fontSize={12}
        handleCLick={handleClickEvent}
      />
    </div>
  );
}

export { Redirect };
