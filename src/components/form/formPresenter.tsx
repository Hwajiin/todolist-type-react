import React, { FormEventHandler, ReactNode, useRef } from "react";

type FormPresenterProps = {
  onAdd: (ref: React.MutableRefObject<HTMLInputElement | null>) => void;
};

const FormPresenter = ({ onAdd }: FormPresenterProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onAdd(inputRef);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={inputRef} />
      <button>ADD</button>
    </form>
  );
};

export default FormPresenter;
