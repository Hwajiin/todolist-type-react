import React, { MouseEventHandler } from "react";
import { useHistory } from "react-router";
import { AuthServiceType } from "../App";
import LoginPresenter from "./loginPresenter";

type LoginContainerProps = {
  authService: AuthServiceType;
};

type FirebaseResObj = {
  user: { uid: string };
};

const LoginContainer = ({ authService }: LoginContainerProps) => {
  const history = useHistory();
  const goToHome = (userToken: string) => {
    history.push({
      pathname: "/home",
      state: { id: userToken },
    });
  };

  const onLogin = (providerName: string) => {
    authService //
      .login(providerName)
      .then((res: FirebaseResObj) => goToHome(res.user.uid));
  };

  return <LoginPresenter onLogin={onLogin} />;
};

export default LoginContainer;
