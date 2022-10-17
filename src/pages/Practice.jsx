import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemList from "../components/ItemList";

import NewForm from "../components/NewForm";
import SingleItem from "../components/SingleItem";

import { db } from "../firebase";

const Container = styled.div``;
const Wrapper = styled.div`
  text-align: center;
`;
const Image = styled.img`
  height: 100px;
  cursor: pointer;
`;
const Title = styled.h1``;
const Form = styled.form``;
const ItemWrapper = styled.div`
  margin-top: 30px;
`;

const SingleItemWrapper = styled.div``;

const Practice = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection("items")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setItems(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Image src="undraw_To_do_list_re_9nt7.png" />
        </Link>
        <Title>Travel items</Title>
        <NewForm />
        <ItemWrapper>
          {items.map(({ id, name, uid }) => (
            <SingleItemWrapper key={id}>
              <SingleItem content={name} />
            </SingleItemWrapper>
          ))}
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default Practice;
