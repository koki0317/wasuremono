import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
`;
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #6c63ff;
  width: 90%;
  padding: 5px 10px;
`;
const ListTitle = styled.h2``;
const Date = styled.span`
  background-color: #6c63ff;
  color: white;
  font-weight: 700;
  padding: 5px;
`;
const Image = styled.img`
  height: 200px;
`;

const TitleImageWrapper = styled.div`
  text-align: center;
`;

const Lists = () => {
  return (
    <Container>
      <TitleImageWrapper>
        <Title>Your lists</Title>
        <Image src="undraw_Note_list_re_r4u9.png" />
      </TitleImageWrapper>
      <ListWrapper>
        <List>
          <ListTitle>Travel abroad</ListTitle>
          <Date>today</Date>
        </List>
      </ListWrapper>
    </Container>
  );
};

export default Lists;
