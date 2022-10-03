import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 80%;
`;
const Image = styled.img`
  width: 270px;
`;
const Title = styled.h1`
  color: white;
  margin: 15px 0;
`;
const SubTitle = styled.h3`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;
const Button = styled.button`
  width: 200px;
  background-color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 0;
  font-size: 20px;
  color: #6c63ff;
  font-weight: 600;
  box-shadow: 0 5px 0 #c2c0c0;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0.93;

  &:active {
    transform: translateY(4px);
    border-bottom: none;
  }

  &:hover {
    opacity: 1;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
const Box = styled.div`
  padding-top: 30px;
  background-color: #6c63ff;
  margin-top: 50px;
  border-radius: 0 0 30px 30px;
  height: 80vh;
`;

const Top = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Image src="undraw_Reminder_re_fe15.png" />
          <ContentWrapper>
            <Title>Create your list!</Title>
            <SubTitle>Never forget your travel items</SubTitle>
            <Link to={`/list`}>
              <Button>START</Button>
            </Link>
          </ContentWrapper>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Top;
