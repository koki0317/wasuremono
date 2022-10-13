import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.h1``;
const Button = styled.button``;

const Question1 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Domestic or International travel?</Title>
        <Button>Domestic</Button>
        <Button>International</Button>
      </Wrapper>
    </Container>
  );
};

export default Question1;
