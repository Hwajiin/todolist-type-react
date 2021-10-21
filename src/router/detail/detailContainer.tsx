import React from "react";
import { AuthServiceType } from "../../components/App";
import DetailPresenter from "./detailPresenter";

type DetailContainerProps = {
  authService: AuthServiceType;
};

const DetailContainer = ({ authService }: DetailContainerProps) => {
  return <DetailPresenter />;
};

export default DetailContainer;
