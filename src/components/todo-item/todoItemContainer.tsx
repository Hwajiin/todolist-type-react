import React, { MutableRefObject, useState } from "react";
import { useHistory } from "react-router";
import { ToDo, useDispatch, useToDoState } from "../../common/context";
import ToDoItemPresenter from "./todoItemPresenter";

type ToDoItemContainerProps = {
  todo: ToDo;
  isCompleted?: boolean;
};

const ToDoItemContainer = ({ todo, isCompleted }: ToDoItemContainerProps) => {
  const dispatch = useDispatch();
  const { toDos } = useToDoState();

  const onDelete = () => {
    dispatch({ type: "DEL", id: todo.id });
  };

  const onToggle = () => {
    dispatch({
      type: isCompleted ? "UNCOMPLETE" : "COMPLETE",
      id: todo.id,
    });
  };

  // Edit 기능 구현 후
  const onEdit = (ref: MutableRefObject<HTMLInputElement | null>) => {
    const text = ref.current!.value;
    if (text.trim() !== "") {
      dispatch({ type: "EDIT", id: todo.id, text });
    }
  };

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
