import React from "react";
import { ToDo } from "../../common/context";
import ToDoItemPresenter from "./todoItemPresenter";

type ToDoItemContainerProps = {
  todo: ToDo;
};

const ToDoItemContainer = ({ todo }: ToDoItemContainerProps) => {
  return <ToDoItemPresenter todo={todo} />;
};

export default ToDoItemContainer;
