import React from "react";
import styled from "styled-components";

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

const Input = styled.input``;

const ListTitle = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Name the list title.</Title>
        <Input placeholder="List name" />
      </Wrapper>
    </Container>
  );
};

export default ListTitle;
