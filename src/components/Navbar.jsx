import { Home } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import SignOut from "./SignOut";

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

const Avatar = styled.img`
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

const Navbar = () => {
  const [user] = useAuthState(auth);

  const { photoURL } = auth.currentUser;
  console.log(photoURL);
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Icon>
            <Home />
          </Icon>
        </Link>
        <Text>{user ? <Avatar src={photoURL} alt="" /> : <SignIn />}</Text>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
