import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 73vh;
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

const Question1 = ({ addAnswer, answer }) => {
  const deleteItem = () => {
    answer.pop();
  };
  return (
    <Container>
      <Wrapper>
        1/3
        <Title>
          Domestic <br />
          or <br />
          International travel?
        </Title>
        <Link to="/create/question2">
          <ComponentButton
            content={"Domestic"}
            onClick={() => addAnswer("Domestic")}
          />
        </Link>
        <Link to="/create/question2">
          <ComponentButton
            content={"International"}
            onClick={() => addAnswer("International")}
          />
        </Link>
        <Link to="/create/title">
          <ComponentButton
            backgroundColor={"rgba(0, 0, 0, 0.7)"}
            content={"Back"}
            onClick={() => deleteItem()}
          />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Question1;
