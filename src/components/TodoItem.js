import React from "react";
//Redux
import { useDispatch } from "react-redux";
import { markComplete, deleteItem } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const markCompleted = () => {
    dispatch(markComplete({ id, completed: !completed }));
    const listItem = document.querySelector(".todo-item");
    if (!completed) {
      listItem.classList.add("completed");
    }
    if (completed) {
      listItem.classList.remove("completed");
    }
  };
  const deleteAction = () => {
    dispatch(deleteItem({ id }));
  };
  return (
    <li className="todo-item">
      <section className="item">
        <label class="item-name">
          <input type="checkbox"></input>
          <div
            class="checkmark smooth-transition"
            onClick={markCompleted}
          ></div>
        </label>
        <p>{title}</p>
      </section>
      <section>
        <button onClick={deleteAction}>X</button>
      </section>
    </li>
  );
};

export default TodoItem;
