import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../components/Button";

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

const Input = styled.input`
  margin-bottom: 30px;
  padding: 5px 20px;
  width: 80%;
  outline: none;
  border-radius: 3px;
  font-size: 18px;
  border: 2px solid rgba(0, 0, 0, 0.7);
`;

const ListTitle = ({ addAnswer }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    addAnswer(inputText);
  };
  return (
    <Container>
      <Wrapper>
        <Title>Name the list title.</Title>
        <Input placeholder="List name" onChange={handleChange} />
        <Link to="/create/question1">
          <ComponentButton content={"NEXT"} onClick={() => handleClick()} />
        </Link>
        <Link to="/create/">
          <ComponentButton
            backgroundColor={"rgba(0, 0, 0, 0.7)"}
            content={"Back"}
          />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default ListTitle;
