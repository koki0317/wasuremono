import React from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const Container = styled.div``;
const Login = styled.h3``;

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <Container>
      <Login onClick={signInWithGoogle}>Login</Login>
    </Container>
  );
};

export default SignIn;
