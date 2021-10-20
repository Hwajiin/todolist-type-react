import { UserCredential, User } from "@firebase/auth";
import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import DetailContainer from "./detail/detailContainer";
import HomeContainer from "./home/homeContainer";
import LoginContainer from "./login/loginContainer";

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
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <LoginContainer authService={authService} />
        </Route>
        <Route path="/home">
          <HomeContainer authService={authService} />
        </Route>
        <Route path="/:id">
          <DetailContainer authService={authService} />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default App;
