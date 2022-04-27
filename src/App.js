import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import ToggleMode from "./components/ToggleMode";

const App = () => {
  return (
    <main>
      <section className="title-section">
        <h1>What Todo</h1>
        <ToggleMode />
      </section>
      <section className="todo-section">
        <AddTodoForm />
        <TodoList />
      </section>
      <section className="summary-section">
        <TotalCompleteItems />
      </section>
    </main>
  );
};

export default App;
