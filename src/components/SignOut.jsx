import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

const Container = styled.div``;
const Logout = styled.h3``;

const SignOut = () => {
  return (
    <Container>
      <Logout onClick={() => auth.signOut(auth)}>Logout</Logout>
    </Container>
  );
};

export default SignOut;
