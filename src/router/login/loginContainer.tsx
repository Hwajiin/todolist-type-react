import React, { MouseEventHandler, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthServiceType } from "../../components/App";
import LoginPresenter from "./loginPresenter";

type LoginContainerProps = {
  authService: AuthServiceType;
};

type FirebaseResObj = {
  user: { uid: string };
};

const LoginContainer = ({ authService }: LoginContainerProps) => {
  const history = useHistory();
  const goToHome = (id: string) => {
    history.push({
      pathname: "/home",
      state: { id },
    });
  };

  const onLogin = (providerName: string) => {
    authService //
      .login(providerName)
      .then((res) => goToHome(res.user.uid))
      .catch((err) => {
        alert("동일한 이메일의 계정이 있습니다!");
        return history.push("/");
      });
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToHome(user.uid);
      });
  });

  return <LoginPresenter onLogin={onLogin} />;
};

export default LoginContainer;
