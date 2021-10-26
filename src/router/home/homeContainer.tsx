import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDB, useSetToDoList, useToDoState } from "../../common/context";
import { AuthServiceType } from "../../components/App";
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

  const { toDos, completed } = useToDoState();
  const DB = useDB();
  const setToDoList = useSetToDoList();
  const toDoState = useToDoState();

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    if (!userId) return;
    DB.readList(userId, (toDoState) => console.log(toDoState));
  }, []);

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

  return (
    <HomePresenter
      onLogout={onLogout}
      toDos={toDos}
      completed={completed}
      userId={userId}
    />
  );
};

export default HomeContainer;
