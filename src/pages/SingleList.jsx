import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.img`
  height: 100px;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 10px;
`;

const SingleList = () => {
  return (
    <Container>
      <Link to="/create/question3">
        <Image src="undraw_To_do_list_re_9nt7.png" />
      </Link>
      <Title>Travel items</Title>
    </Container>
  );
};

export default SingleList;
