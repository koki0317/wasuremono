import React from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const Container = styled.div``;
const Button = styled.button``;

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <Container>
      <Button onClick={signInWithGoogle}>Login</Button>
    </Container>
  );
};

export default SignIn;
