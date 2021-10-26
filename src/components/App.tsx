import { UserCredential, User } from "@firebase/auth";
import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import ToDoProvider, { ToDo } from "../common/context";
import DetailContainer from "../router/detail/detailContainer";
import DiaryContainer from "../router/diary/diaryContainer";
import HomeContainer from "../router/home/homeContainer";
import LoginContainer from "../router/login/loginContainer";

type OnUserChange = (user: User) => void;

export type AuthServiceType = {
  login(provider: string): Promise<UserCredential | never>;
  logout(): void;
  onAuthChange(onUserChange: OnUserChange): void;
};

type AppProps = {
  authService: AuthServiceType;
};

const App = ({ authService }: AppProps) => {
  return (
    <ToDoProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <LoginContainer authService={authService} />
          </Route>
          <Route path="/home">
            <HomeContainer authService={authService} />
          </Route>
          <Route path="/diary">
            <DiaryContainer authService={authService} />
          </Route>
          <Route path="/:id">
            <DetailContainer authService={authService} />
          </Route>

          <Redirect from="*" to="/" />
        </Switch>
      </HashRouter>
    </ToDoProvider>
  );
};

export default App;
