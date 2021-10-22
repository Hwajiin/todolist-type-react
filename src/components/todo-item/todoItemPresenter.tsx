import React from "react";
import { ToDo } from "../../common/context";

type ToDoItemPresenterProps = {
  todo: ToDo;
};

const ToDoItemPresenter = ({ todo }: ToDoItemPresenterProps) => {
  return (
    <li>
      <div>
        <span>{todo.text}</span>
      </div>
      <div>
        <button>DEL</button>
        <button>COMPLETE</button>
        <button>EDIT</button>
      </div>
    </li>
  );
};

export default ToDoItemPresenter;
