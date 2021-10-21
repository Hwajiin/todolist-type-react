import React from "react";
import { AuthServiceType } from "../../components/App";
import DiaryPresenter from "./diaryPresenter";

type DiaryContainerProps = {
  authService: AuthServiceType;
};

const DiaryContainer = ({ authService }: DiaryContainerProps) => {
  return <DiaryPresenter />;
};

export default DiaryContainer;
