import React from "react";
import styled from "styled-components";
import ItemList from "../components/ItemList";
import ListForm from "../components/ListForm";

const Container = styled.div``;
const Title = styled.h1``;

const List = () => {
  return (
    <Container>
      <Title>Travel items</Title>
      <ListForm />
      <ItemList />
    </Container>
  );
};

export default List;
