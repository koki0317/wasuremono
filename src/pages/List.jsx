import React, { useState } from "react";
import styled from "styled-components";
import ItemList from "../components/ItemList";
import ListForm from "../components/ListForm";

const Container = styled.div``;
const Title = styled.h1`
  margin-top: 10px;
`;
const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  height: 100px;
`;

const List = () => {
  const [itemList, setItemList] = useState([]);
  return (
    <Container>
      <Wrapper>
        <Image src="undraw_To_do_list_re_9nt7.png" />
        <Title>Travel items</Title>
        <ListForm itemList={itemList} setItemList={setItemList} />
        <ItemList itemList={itemList} setItemList={setItemList} />
      </Wrapper>
    </Container>
  );
};

export default List;
