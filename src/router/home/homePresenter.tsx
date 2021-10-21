import React from "react";

type HomePresenterProps = {
  onLogout: () => void;
};

const HomePresenter = ({ onLogout }: HomePresenterProps) => {
  return <button onClick={onLogout}>Logout</button>;
};

export default HomePresenter;
