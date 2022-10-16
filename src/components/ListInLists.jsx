import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

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

const ListInLists = ({ answer }) => {
  // get the obj from localStorage called travelItems
  // Iterate over it
  // Set the link to the title(later)
  const [travelItemList, setTravelItemList] = useState(
    JSON.parse(localStorage.getItem("travelItems")) || []
  );
  // need ListTitle
  const travelLists = travelItemList.map((item) => {
    console.log(item.travelList);
  });
  console.log(answer);
  return (
    <Container>
      <ListWrapper>
        <List>
          <ListTitle>Travel abroad</ListTitle>
          <Date>today</Date>
        </List>
      </ListWrapper>
    </Container>
  );
};

export default ListInLists;
