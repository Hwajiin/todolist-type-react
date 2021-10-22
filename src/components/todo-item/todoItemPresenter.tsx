import React from "react";
import { ToDo } from "../../common/context";

type ToDoItemPresenterProps = {
  todo: ToDo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: () => void;
};

const ToDoItemPresenter = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
}: ToDoItemPresenterProps) => {
  return (
    <li>
      <div>
        <span>{todo.text}</span>
      </div>
      <div>
        <button onClick={onDelete}>DEL</button>
        <button onClick={onToggle}>COMPLETE</button>
        <button onClick={onEdit}>EDIT</button>
      </div>
    </li>
  );
};

export default ToDoItemPresenter;
