import React, {
  FormEventHandler,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import { ToDo, useToDoState } from "../../common/context";

type ToDoItemPresenterProps = {
  todo: ToDo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (ref: MutableRefObject<HTMLInputElement | null>) => void;
  isCompleted?: boolean;
};

const ToDoItemPresenter = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
  isCompleted,
}: ToDoItemPresenterProps) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    setEdit(true);
  };

  const { toDos } = useToDoState();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    inputRef && onEdit(inputRef);
    setEdit(false);
    console.log(toDos);
  };

  return (
    <li>
      {edit ? (
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="수정" ref={inputRef} />
        </form>
      ) : (
        <>
          <div>
            <span>{todo.text}</span>
          </div>
          <div>
            <button onClick={onDelete}>DEL</button>
            <button onClick={onToggle}>
              {isCompleted ? "UNCOMPLETE" : "COMPLETE"}
            </button>
            <button onClick={onClick}>EDIT</button>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItemPresenter;
