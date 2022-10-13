import React from "react";
import styled from "styled-components";
import ComponentButton from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 79vh;
  padding-top: 100px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: 400;
`;
// const Button = styled.button``;

const Question = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Domestic or International travel?</Title>
        <ComponentButton content={"Hello"} />
        <ComponentButton content={"Hello"} />
      </Wrapper>
    </Container>
  );
};

export default Question;
