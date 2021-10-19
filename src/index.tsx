import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import GlobalStyles from "./globalStyles";
import AuthService from "./service/auth_service";
import firebaseApp from "./service/firebase";

const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
