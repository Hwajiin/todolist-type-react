import React from "react";
import { ToDo, useDispatch } from "../../common/context";
import ToDoItemPresenter from "./todoItemPresenter";

type ToDoItemContainerProps = {
  todo: ToDo;
};

const ToDoItemContainer = ({ todo }: ToDoItemContainerProps) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch({ type: "DEL", id: todo.id });
  };

  const onToggle = () => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  // Edit 기능 구현 후
  const onEdit = () => {};

  return (
    <ToDoItemPresenter
      todo={todo}
      onDelete={onDelete}
      onToggle={onToggle}
      onEdit={onEdit}
    />
  );
};

export default ToDoItemContainer;
