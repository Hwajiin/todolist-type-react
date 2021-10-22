import React, { FormEventHandler } from "react";
import { useDispatch, useToDoState } from "../../common/context";
import FormPresenter from "./formPresenter";

const FormContainer = () => {
  const dispatch = useDispatch();

  const onAdd = (ref: React.MutableRefObject<HTMLInputElement | null>) => {
    const text = ref.current!.value;
    if (text.trim() !== "") {
      dispatch({ type: "ADD", text });
    }
    ref.current!.value = "";
  };

  return <FormPresenter onAdd={onAdd} />;
};

export default FormContainer;
