import React from "react";
//Redux
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completed = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const uncompleted = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === false)
  );
  return (
    <section className="total-complete-items">
      <p>Tasks: {uncompleted.length}</p>
      <p>Completed: {completed.length}</p>
    </section>
  );
};

export default TotalCompleteItems;
