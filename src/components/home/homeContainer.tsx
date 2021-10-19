import React from "react";
import { AuthServiceType } from "../App";
import HomePresenter from "./homePresenter";

type HomeContainerProps = {
  authService: AuthServiceType;
};

const HomeContainer = ({ authService }: HomeContainerProps) => {
  return <HomePresenter />;
};

export default HomeContainer;
