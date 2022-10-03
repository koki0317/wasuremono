import React, { useState } from "react";
import styled from "styled-components";
import ListForm from "./ListForm";

const Container = styled.div``;
const ItemList = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    console.log(item);
    const newItems = [item, ...items];

    setItems(newItems);
  };

  return (
    <Container>
      <h1>Hey</h1>
      <ListForm onSubmit={addItem} />
    </Container>
  );
};

export default ItemList;
