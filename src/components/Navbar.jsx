import { Home } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./SignIn";
import LoginImage from "./LoginImage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Container = styled.div`
  background-color: rgba(108, 99, 255, 0.8);
`;
const Text = styled.h3`
  padding: 5px 10px 5px 0;
  color: white;
  text-align: right;
  font-size: 16px;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  color: white;
  padding-left: 10px;
  display: flex;
`;

const Lists = styled.h3`
  color: white;
  margin-right: 10px;
`;

const WrapperRight = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Icon>
            <Home />
          </Icon>
        </Link>
        <WrapperRight>
          <Link to="/lists" style={{ textDecoration: "none" }}>
            <Lists>Lists</Lists>
          </Link>
          <Text>{user ? <LoginImage /> : <SignIn />}</Text>
        </WrapperRight>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
