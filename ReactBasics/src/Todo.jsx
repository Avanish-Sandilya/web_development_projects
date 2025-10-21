function Task(props) {
  return <li>{props.taskToDo}</li>;
}

function TodoList(props) {
  const tasksToDo = props.tasks.map((task) => (
    <Task key={task.id} taskToDo={task.task} />
  ));

  return <ul>{tasksToDo}</ul>;
}

function Todo() {
  const todos = [
    { task: "Mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "Feed the cat", id: crypto.randomUUID() },
  ];

  return (
    <>
      <h1>Todo</h1>
      <TodoList tasks={todos} />
    </>
  );
}

export default Todo;
