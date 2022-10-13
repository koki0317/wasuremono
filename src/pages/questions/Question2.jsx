import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;

const Question2 = () => {
  return (
    <Container>
      <Title>Domestic or International travel?</Title>
      <Button>Domestic</Button>
      <Button>International</Button>
    </Container>
  );
};

export default Question2;