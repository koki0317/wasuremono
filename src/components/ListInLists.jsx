import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase";

const Container = styled.div``;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #6c63ff;
  width: 90%;
  padding: 5px 10px;
  border-radius: 3px;
`;

const ListTitle = styled.h3`
  color: #585858;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 240px;
`;
const Date = styled.span`
  background-color: #6c63ff;
  color: white;
  font-weight: 700;
  padding: 5px;
`;

const ListInLists = () => {
  const [travelItems, setTravelItems] = useState([]);

  useEffect(() => {
    db.collection("travelItems")
      .orderBy("createdAt", "desc")
      .limit(50)
      .onSnapshot((snapshot) => {
        setTravelItems(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    // const getTravelItems = async () => {
    //   const data = await getDocs(travelItemsCollectionRef);
    //   setTravelItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };
    // getTravelItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {travelItems.map((item, index) => (
        <ListWrapper key={index}>
          <List>
            <Link
              to={`/lists/${
                item.id.includes(" ") ? item.id.replace(" ", "-") : item.id
              }`}
              style={{ textDecoration: "none" }}
            >
              <ListTitle>{item.id}</ListTitle>
            </Link>
            <Date>{item.createdAt.toDate().toLocaleDateString()}</Date>
          </List>
        </ListWrapper>
      ))}
    </Container>
  );
};

export default ListInLists;
