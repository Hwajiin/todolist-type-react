import React from "react";
import { ToDo, useDispatch } from "../../common/context";
import ToDoItemPresenter from "./todoItemPresenter";

type ToDoItemContainerProps = {
  todo: ToDo;
  isCompleted?: boolean;
};

const ToDoItemContainer = ({ todo, isCompleted }: ToDoItemContainerProps) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch({ type: "DEL", id: todo.id });
  };

  const onToggle = () => {
    dispatch({ type: isCompleted ? "UNCOMPLETE" : "COMPLETE", id: todo.id });
  };

  // Edit 기능 구현 후
  const onEdit = () => {};

  return (
    <ToDoItemPresenter
      todo={todo}
      onDelete={onDelete}
      onToggle={onToggle}
      onEdit={onEdit}
      isCompleted={isCompleted}
    />
  );
};

export default ToDoItemContainer;
