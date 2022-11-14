import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Login = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default Login;
