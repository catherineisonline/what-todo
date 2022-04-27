import React from "react";
//Redux
import { useDispatch } from "react-redux";
import { markComplete, deleteItem } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const markCompleted = (e) => {
    dispatch(markComplete({ id, completed: !completed }));
    // const listItem = document.querySelectorAll(".todo-item");
    // console.log(listItem);

    if (!completed) {
      e.target.classList.add("completed");
    }
    if (completed) {
      e.target.classList.remove("completed");
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
