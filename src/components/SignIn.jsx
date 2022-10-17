import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Button = styled.button``;

const SignIn = () => {
  const signInWithGoogle = () => {};
  return (
    <Container>
      <Button onClick={signInWithGoogle}>Login</Button>
    </Container>
  );
};

export default SignIn;
