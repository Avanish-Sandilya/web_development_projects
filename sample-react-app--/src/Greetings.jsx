function Greeting() {
  return <h1>Hello, how are you, what is up</h1>;
}

function AnimalList() {
  const listOfAnimals = ["Lion", "Tiger", "Dog", "Cat", "Shark"];

  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {listOfAnimals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}

function SportsList() {
  const sports = ["Football", "Hockey", "Cricket", "Badminton", "Hammer Throw"];

  return (
    <div>
      <h1>Sports</h1>
      <ul>
        {sports.map((sport) => {
          return <li key={sport}>{sport}</li>;
        })}
      </ul>
    </div>
  );
}

export { AnimalList, Greeting, SportsList };
