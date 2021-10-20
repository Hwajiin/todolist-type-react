import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AuthServiceType } from "../App";
import HomePresenter from "./homePresenter";

type HomeContainerProps = {
  authService: AuthServiceType;
};

type History = {
  id: string;
};

const HomeContainer = ({ authService }: HomeContainerProps) => {
  const history = useHistory<History>();
  const historyState = history.location.state;

  const [userId, setUserId] = useState<string>(historyState && historyState.id);

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          history.push("/");
        }
      });
  }, [authService]);

  return <HomePresenter onLogout={onLogout} />;
};

export default HomeContainer;
