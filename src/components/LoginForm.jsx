import React from "react";
import styled from "styled-components";
import ComponentButton from "./Button";

const Container = styled.div``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const Title = styled.h1`
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => {
  return (
    <Container>
      <Form>
        <Wrapper>
          <Title>Login</Title>
          <Label>E-Mail</Label>
          <Input />
          <Label>Password</Label>
          <Input style={{ marginBottom: "30px" }} />
          <ComponentButton content={"Login"} />
        </Wrapper>
      </Form>
    </Container>
  );
};

export default LoginForm;
