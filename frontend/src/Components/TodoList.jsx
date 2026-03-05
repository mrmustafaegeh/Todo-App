import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, selectedTab, handleDeleteTodo } = props;

  const filterTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((value) => value.complete)
      : todos.filter((value) => !value.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((value) => value.input == todo.input)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
}
