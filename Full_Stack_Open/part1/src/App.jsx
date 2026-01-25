import dynamicValues from "./anotherComponent"
const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
      <p>{dynamicValues}</p>
    </div>
  )
}

export default App