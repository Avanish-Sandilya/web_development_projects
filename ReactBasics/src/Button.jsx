function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

function GetButtons() {
  return (
    <>
      <Button text="click me" color="blue" fontSize={12} />
    </>
  );
}

export default GetButtons;
