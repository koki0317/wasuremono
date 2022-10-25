import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase";
import { getDatabase } from "firebase/database";

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

const ListInLists = () => {
  // get the obj from localStorage called travelItems
  // Iterate over it
  // Set the link to the title(later)
  const [travelItems, setTravelItems] = useState([]);
  // need ListTitle
  // const travelLists = travelItemList.map((item) => {
  //   console.log(item.travelList);
  // });

  // useEffect(() => {
  //   db.collection(`travelItems${id}`)
  //     .orderBy("createdAt")
  //     .limit(50)
  //     .onSnapshot((snapshot) => {
  //       setTravelItems(
  //         snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       );
  //     });
  //   // const getTravelItems = async () => {
  //   //   const data = await getDocs(travelItemsCollectionRef);
  //   //   setTravelItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   // };
  //   // getTravelItems();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const database = getDatabase();

  console.log(database);
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
