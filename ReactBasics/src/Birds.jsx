function Bird(prop) {
  return <li>{prop.Bird}</li>;
}

function List(prop) {
  const listToReturn = prop.Birds.map((bird) => (
    <Bird key={bird} Bird={bird} />
  ));

  return (
    <>
      <ul>{listToReturn}</ul>
    </>
  );
}

function BirdList() {
  const list = ["Eagle", "Sparrow", "Crow", "Kite", "Raven"];

  return (
    <>
      <h1>Birds</h1>
      <List Birds={list} />
    </>
  );
}

export default BirdList;
