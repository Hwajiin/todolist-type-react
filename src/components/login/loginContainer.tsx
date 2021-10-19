import React from "react";
import { AuthServiceType } from "../App";
import LoginPresenter from "./loginPresenter";

type LoginContainerProps = {
  authService: AuthServiceType;
};

const LoginContainer = ({ authService }: LoginContainerProps) => {
  return <LoginPresenter />;
};

export default LoginContainer;
