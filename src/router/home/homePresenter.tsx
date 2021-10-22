import React from "react";
import { ToDo } from "../../common/context";
import FormContainer from "../../components/form/formContainer";
import ToDoItemContainer from "../../components/todo-item/todoItemContainer";
import ToDoListContainer from "../../components/todo-list/todoListContainer";

type HomePresenterProps = {
  onLogout: () => void;
  toDos: ToDo[];
};

const HomePresenter = ({ onLogout, toDos }: HomePresenterProps) => {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <div>
        <FormContainer />
        <ToDoListContainer name="To Do">
          {toDos.map((todo) => (
            <ToDoItemContainer key={todo.id} todo={todo} />
          ))}
        </ToDoListContainer>
      </div>
    </div>
  );
};

export default HomePresenter;
