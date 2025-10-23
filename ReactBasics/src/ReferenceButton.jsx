function Button({ text, color, fontsize, handleclick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontsize + "px",
  };

  return (
    <button onClick={handleclick} style={buttonStyle}>
      {text}
    </button>
  );
}

function ReferenceButton() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Button
        handleclick={() => handleButtonClick("https://www.theodinproject.com")}
        text="Odin Project"
        color="White"
        fontsize={12}
      />
      <Button
        handleclick={() => handleButtonClick("https://www.google.com")}
        text="Google"
        color="White"
        fontsize={12}
      />
    </>
  );
}

export default ReferenceButton;
