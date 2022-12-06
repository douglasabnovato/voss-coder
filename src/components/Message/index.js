import React from "react";
import styled from "styled-components";
import "./index.css"

const TitleDialog = styled.h1`
  margin: 0;
  font-family: sans-serif;
`;

const MessageDialog = styled.h1`
  font-size: larger;
`; 

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <TitleDialog>Bem-vindo</TitleDialog>
      <MessageDialog>Obrigado por visitar a nossa espaçonave!</MessageDialog>
    </FancyBorder>
  );
}

export default WelcomeDialog;
