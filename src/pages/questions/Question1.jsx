import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../../components/Button";

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
  align-items: center;
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Question = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Domestic or International travel?</Title>
        <ComponentButton content={"Domestic"} />
        <ComponentButton content={"International"} />
        <Link to="/create">
          <ComponentButton
            backgroundColor={"rgba(0, 0, 0, 0.7)"}
            content={"Back"}
          />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Question;
