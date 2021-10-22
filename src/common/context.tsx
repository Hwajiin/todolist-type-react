import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useReducer,
  useState,
} from "react";
import toDoReducer, { ToDoAction } from "./reducer";

/**
 * ToDoState의 형태
 */
export type ToDo = {
  id: string;
  text: string;
};

export type ToDoState = {
  toDos: ToDo[];
  completed: ToDo[];
};

/**
 * ToDoContext Type
 */
type ToDoContext = {
  todoState: ToDoState;
  dispatch: Dispatch<ToDoAction>;
};

const ToDoContext = createContext<ToDoContext | null>(null);

const initialToDoState: ToDoState = {
  toDos: [],
  completed: [],
};

const ToDoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoState, dispatch] = useReducer(toDoReducer, initialToDoState);

  return (
    <ToDoContext.Provider value={{ todoState, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ToDoContext)!;
  return dispatch;
};

export const useToDoState = () => {
  const { todoState } = useContext(ToDoContext)!;
  return todoState;
};

export default ToDoProvider;
