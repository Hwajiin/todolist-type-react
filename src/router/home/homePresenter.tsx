import React from "react";
import { ToDo } from "../../common/context";
import FormContainer from "../../components/form/formContainer";
import ToDoItemContainer from "../../components/todo-item/todoItemContainer";
import ToDoListContainer from "../../components/todo-list/todoListContainer";

type HomePresenterProps = {
  onLogout: () => void;
  toDos: ToDo[];
  completed: ToDo[];
  userId: string;
};

const HomePresenter = ({
  onLogout,
  toDos,
  completed,
  userId,
}: HomePresenterProps) => {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <div>
        <FormContainer userId={userId} />
        <ToDoListContainer name="To Do">
          {toDos.map((todo) => (
            <ToDoItemContainer key={todo.id} todo={todo} />
          ))}
        </ToDoListContainer>
        <ToDoListContainer name="Completed">
          {completed.map((todo) => (
            <ToDoItemContainer key={todo.id} todo={todo} isCompleted={true} />
          ))}
        </ToDoListContainer>
      </div>
    </div>
  );
};

export default HomePresenter;
