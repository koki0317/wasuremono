import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
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

const Button = styled.button`
  width: 200px;
  background-color: #6c63ff;
  border: none;
  border-radius: 3px;
  padding: 5px 0;
  font-size: 20px;
  color: white;
  font-weight: 600;
  box-shadow: 0 5px 0 #c2c0c0;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0.93;
  margin-bottom: 30px;

  &:active {
    transform: translateY(4px);
    border-bottom: none;
  }

  &:hover {
    opacity: 1;
  }
`;

const Question2 = ({ addAnswer, answer }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleClick = () => {
    addAnswer(input);
  };

  const deleteItem = () => {
    answer.pop();
  };

  return (
    <Container>
      <Wrapper>
        2/3
        <Title>How many days are you staying?</Title>
        <FormControl fullWidth style={{ marginBottom: "30px" }}>
          <InputLabel id="demo-simple-select-label">Days</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Days"
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={10}>More</MenuItem>
          </Select>
        </FormControl>
        <Link to="/create/question3">
          <Button
            onClick={() => handleClick()}
            disabled={!input ? true : false}
          >
            NEXT
          </Button>
        </Link>
        <Link to="/create/question1">
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

export default Question2;
