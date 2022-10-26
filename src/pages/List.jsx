import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListForm from "../components/ListForm";
import SingleItem from "../components/SingleItem";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Container = styled.div``;
const Wrapper = styled.div`
  text-align: center;
`;
const Image = styled.img`
  height: 100px;
  cursor: pointer;
`;
const Title = styled.h1``;
const ItemWrapper = styled.div`
  margin-top: 30px;
`;

const SingleItemWrapper = styled.div``;

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection("items")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  }, []);

  // the code below can access to sub collection

  const itemsRef = collection(
    db,
    "items",
    "wj2VodedZCcJCg7s1YdD",
    "travelItems"
  );

  const getTravelItems = async () => {
    const data = await getDocs(itemsRef);

    data.docs.forEach((doc) => {
      console.log(doc.data());
    });
  };
  getTravelItems();

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Image src="/images/undraw_To_do_list_re_9nt7.png" />
        </Link>
        <Title>Travel items</Title>
        <ListForm collectionItem={"items"} />
        <ItemWrapper>
          {items.map(({ id, name, uid }) => (
            <SingleItemWrapper key={id}>
              <SingleItem content={name} item={id} tableName={"items"} />
            </SingleItemWrapper>
          ))}
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default List;
