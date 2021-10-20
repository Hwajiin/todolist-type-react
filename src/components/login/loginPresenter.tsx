import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Section = styled.section``;

const List = styled.ul``;

const Item = styled.li``;

type LoginPresenterProps = {
  onLogin: (providerName: string) => void;
};

const LoginPresenter = ({ onLogin }: LoginPresenterProps) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.textContent) {
      console.log(e.currentTarget.textContent);
      onLogin(e.currentTarget.textContent);
    }
  };
  return (
    <Section>
      <List>
        <Item>
          <button onClick={onClick}>Google</button>
        </Item>
        <Item>
          <button onClick={onClick}>Github</button>
        </Item>
        <Item>
          <button onClick={onClick}>Twitter</button>
        </Item>
      </List>
    </Section>
  );
};

export default LoginPresenter;
