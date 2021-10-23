import { ToDoState } from "./context";
import { v4 as uuidv4 } from "uuid";

export type ToDoAction =
  | { type: "ADD"; text: string }
  | { type: "DEL"; id: string }
  | { type: "COMPLETE"; id: string }
  | { type: "UNCOMPLETE"; id: string }
  | { type: "EDIT"; id: string; text: string };

const toDoReducer = (state: ToDoState, action: ToDoAction): ToDoState => {
  const { toDos, completed } = state;
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        toDos: [{ text: action.text, id: uuidv4() }, ...toDos],
      };
    case "DEL":
      return {
        ...state,
        toDos: toDos.filter((todo) => todo.id !== action.id),
        completed: completed.filter((todo) => todo.id !== action.id),
      };
    case "COMPLETE":
      const completeTarget = toDos.find((todo) => todo.id === action.id)!;
      return {
        ...state,
        toDos: toDos.filter((todo) => todo.id !== action.id),
        completed: [completeTarget, ...completed],
      };
    case "UNCOMPLETE":
      const unCompletedTarget = completed.find(
        (todo) => todo.id === action.id
      )!;
      return {
        ...state,
        completed: completed.filter((todo) => todo.id !== action.id),
        toDos: [unCompletedTarget, ...toDos],
      };
    // Edit 기능 구현하기
    case "EDIT":
      const editToDoTarget = toDos.find((todo) => todo.id === action.id)!;
      const editCompletedTarget = toDos.find((todo) => todo.id === action.id)!;
      return {
        ...state,
        toDos: [{ ...editToDoTarget, text: action.text }, ...toDos],
        completed: [
          { ...editCompletedTarget, text: action.text },
          ...completed,
        ],
      };
    default:
      throw new Error("Sorry");
  }
};

export default toDoReducer;
