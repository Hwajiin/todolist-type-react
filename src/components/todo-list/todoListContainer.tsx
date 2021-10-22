import React from "react";
import ToDoListPresenter from "./todoListPresenter";

type ToDoListContainerProps = {
  children: React.ReactNode;
  name: string;
};

const ToDoListContainer = ({ name, children }: ToDoListContainerProps) => {
  return <ToDoListPresenter name={name} children={children} />;
};

export default ToDoListContainer;
