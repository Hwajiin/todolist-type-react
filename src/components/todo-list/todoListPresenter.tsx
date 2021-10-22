import React from "react";
import styled from "styled-components";

const Title = styled.h2``;

type ToDoListPresenterProps = {
  children: React.ReactNode;
  name: string;
};

const ToDoListPresenter = ({ children, name }: ToDoListPresenterProps) => {
  return (
    <div>
      <Title>{name}</Title>
      <ul>{children}</ul>
    </div>
  );
};

export default ToDoListPresenter;
