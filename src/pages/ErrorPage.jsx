import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  text-align: center;
`;
const Image = styled.img`
  height: 200px;
  margin-top: 30px;
`;
const Message = styled.h2`
  margin-bottom: 30px;
`;

const ErrorPage = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="/images/undraw_server_down_s4lk.png" />
        <Message>The page doesn't exist.</Message>
        <Link to="/">
          <ComponentButton content={"Home"} />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default ErrorPage;
