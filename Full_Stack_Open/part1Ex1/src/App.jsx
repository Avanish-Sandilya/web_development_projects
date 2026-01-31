const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.partNumber} {props.excersiseNumber}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part
        partNumber={props.course.parts[0].name}
        excersiseNumber={props.course.parts[0].exercises}
      />
      <Part
        partNumber={props.course.parts[1].name}
        excersiseNumber={props.course.parts[1].exercises}
      />
      <Part
        partNumber={props.course.parts[2].name}
        excersiseNumber={props.course.parts[2].exercises}
      />
    </>
  );
};

const Footer = (props) => {

  const total = props.course.parts.reduce((s,p)=>s+p.exercises,0);

  return (
    <>
      <p>
        Number of exercises{" "}
        {total}
      </p>
    </>
  );
};

const Course = (props)=>{
  return(
    <>
     <Header course ={props.course}/>
     <Content course={props.course} />
     <Footer course={props.course} />
    </>
   
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
