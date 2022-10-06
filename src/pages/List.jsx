import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemList from "../components/ItemList";
import ListForm from "../components/ListForm";
import { motion } from "framer-motion";

const Container = styled.div``;
const Title = styled.h1`
  margin-top: 10px;
`;
const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  height: 100px;
  cursor: pointer;
`;

const List = () => {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <Container>
      <Wrapper>
        <Link to={`/`}>
          <Image src="undraw_To_do_list_re_9nt7.png" />
        </Link>

        <Title>Travel items</Title>
        <ListForm itemList={itemList} setItemList={setItemList} />

        <ItemList itemList={itemList} setItemList={setItemList} />
      </Wrapper>
    </Container>
  );
};

export default List;
