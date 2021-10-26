import React, { FormEventHandler } from "react";
import { ToDo, useDB, useDispatch, useToDoState } from "../../common/context";
import FormPresenter from "./formPresenter";
import { v4 as uuidv4 } from "uuid";

const FormContainer = ({ userId }: { userId: string }) => {
  const dispatch = useDispatch();
  const DB = useDB();

  const onAdd = (ref: React.MutableRefObject<HTMLInputElement | null>) => {
    const text = ref.current!.value;
    if (text.trim() !== "") {
      const toDo: ToDo = { text, id: uuidv4() };
      dispatch({ type: "ADD", text: toDo.text, id: toDo.id });
      DB.saveToDoItem(userId, toDo, "todos");
    }
    ref.current!.value = "";
  };

  return <FormPresenter onAdd={onAdd} />;
};

export default FormContainer;
