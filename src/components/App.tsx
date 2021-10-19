import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import DetailContainer from "./detail/detailContainer";
import HomeContainer from "./home/homeContainer";
import LoginContainer from "./login/loginContainer";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <LoginContainer />
        </Route>
        <Route path="/home">
          <HomeContainer />
        </Route>
        <Route path="/:id">
          <DetailContainer />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default App;
