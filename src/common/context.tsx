import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useReducer,
  useState,
} from "react";

import firebaseApp from "../service/firebase";
import ProjectDatabase from "../service/firebase_db";
import toDoReducer, { ToDoAction } from "./reducer";

/**
 * DB
 */
export type ProjectDB = {
  saveToDoItem(
    userId: string,
    toDo: ToDo,
    listName: "todos" | "completed"
  ): void;

  removeToDoItem(
    userId: string,
    toDo: ToDo,
    listName: "todos" | "completed"
  ): void;

  readList(userId: string, onUpdate: (data: ToDoState) => void): void;
};

const projectDB = new ProjectDatabase(firebaseApp);

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

export type ToDoJson = {
  toDos: { id: { text: string } };
};

/**
 * ToDoContext Type
 */
type ToDoContext = {
  todoState: ToDoState;
  dispatch: Dispatch<ToDoAction>;
  DB: ProjectDB;
  setToDoList: Dispatch<SetStateAction<ToDoState>>;
};

const ToDoContext = createContext<ToDoContext | null>(null);

const initialToDoState: ToDoState = {
  toDos: [],
  completed: [],
};

/**
 * ToDoProvider
 */

const ToDoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todolist, setToDoList] = useState<ToDoState>({
    toDos: [],
    completed: [],
  });

  const [todoState, dispatch] = useReducer(toDoReducer, todolist);

  return (
    <ToDoContext.Provider
      value={{ todoState, dispatch, DB: projectDB, setToDoList }}
    >
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

export const useDB = () => {
  const { DB } = useContext(ToDoContext)!;
  return DB;
};

export const useSetToDoList = () => {
  const { setToDoList } = useContext(ToDoContext)!;
  return setToDoList;
};

export default ToDoProvider;
