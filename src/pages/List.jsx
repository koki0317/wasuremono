import React, { useState } from "react";
import styled from "styled-components";
import ItemList from "../components/ItemList";
import ListForm from "../components/ListForm";

const Container = styled.div``;
const Title = styled.h1``;

const List = () => {
  const [itemList, setItemList] = useState([]);
  return (
    <Container>
      <Title>Travel items</Title>
      <ListForm itemList={itemList} setItemList={setItemList} />
      <ItemList itemList={itemList} setItemList={setItemList} />
    </Container>
  );
};

export default List;
