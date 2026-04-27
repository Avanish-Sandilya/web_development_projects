const App = () => {
  const course = 'Half Stack application development'
  const part1={
    name:'Fundamentals of react',
    exercises:10
  }
  const part2={
    name:'Using props to pass data',
    exercises:7
  }
  const part3={
    name:'State of a component',
    exersises:14
  }


  return (
    <div>
      <Header header={course}/>
      <Content part={part1.name} excersise={part1.exercises}/>
      <Content part={part2.name} excersise={part2.exercises}/>
      <Content part={part3.name} excersise={part3.exersises}/>
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exersises}/>
    </div>
  )
}

const Header=(props)=>{
  return(
    <h1>{props.header}</h1>
  )
}

const Content=(props)=>{
  return(
    <p>{props.part} {props.excersise}</p>
  )
}

const Total=(props)=>{
  return(
    <p>Number of exercises {props.ex1+props.ex2+props.ex3}</p>
  )
}

export default App