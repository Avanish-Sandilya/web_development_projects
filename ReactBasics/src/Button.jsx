function Button({text,fontSize,color}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

function GetButtons() {
  return (
    <>
      <Button text="click me" color="blue" fontSize={12} />
    </>
  );
}

export default GetButtons;
