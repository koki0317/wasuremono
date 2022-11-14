import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  text-align: center;
  background-color: rgba(108, 99, 255, 0.8);
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const Title = styled.h3`
  padding: 6px 0;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Title>Wasuremono.</Title>
    </Container>
  );
};

export default Footer;
