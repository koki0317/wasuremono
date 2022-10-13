import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: 79vh;
  background: url("undraw_i_can_fly_7egl.png");
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-top: 15px;
  color: black;
  margin-bottom: 30px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
`;
const Button = styled.button`
  width: 200px;
  background-color: red;
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

const BackButton = styled.button`
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

  &:active {
    transform: translateY(4px);
    border-bottom: none;
  }

  &:hover {
    opacity: 1;
  }
`;

const CreateList = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Create your list{" "}
          <span style={{ color: "red", fontSize: "28px" }}>easily</span> by
          answering a few questions!{" "}
        </Title>
        <Link to="/create/question1">
          <Button>CREATE</Button>
        </Link>
        <Link to="/lists">
          <BackButton>Back</BackButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default CreateList;
