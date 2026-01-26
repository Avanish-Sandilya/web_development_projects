
const Hello = (props) => {
  return (
    <div>
      <p>Greetings {props.name} you are {2026-props.birthYear} years old</p>
    </div>
  )
}



const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name='Raju' birthYear={2000}/>
    </div>
  )
}

export default App;