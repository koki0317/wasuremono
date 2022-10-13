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
const Title = styled.h1`
  font-style: italic;
  font-weight: 400;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Question3 = ({ addAnswer }) => {
  return (
    <Container>
      <Wrapper>
        3/3
        <Title>Are you taking any medications?</Title>
        <ComponentButton content={"Yes"} onClick={() => addAnswer("yes")} />
        <ComponentButton content={"No"} onClick={() => addAnswer("no")} />
        <Link to="/create/question2">
          <ComponentButton
            content={"Back"}
            backgroundColor={"rgba(0, 0, 0, 0.7)"}
          />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Question3;
