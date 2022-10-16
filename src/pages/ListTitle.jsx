import React, { useState } from "react";
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
        <ComponentButton content={"NEXT"} onClick={() => handleClick()} />
      </Wrapper>
    </Container>
  );
};

export default ListTitle;
