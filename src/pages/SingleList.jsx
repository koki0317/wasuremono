import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemList from "../components/ItemList";
import ListForm from "../components/ListForm";

const Container = styled.div``;

const Image = styled.img`
  height: 100px;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 10px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const SingleList = () => {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem("travelItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("travelItems", JSON.stringify(itemList));
  }, [itemList]);
  return (
    <Container>
      <Wrapper>
        <Link to="/create/question3">
          <Image src="undraw_To_do_list_re_9nt7.png" />
        </Link>
        <Title>Travel items</Title>
        <ListForm itemList={itemList} setItemList={setItemList} />
        <ItemList itemList={itemList} setItemList={setItemList} />
      </Wrapper>
    </Container>
  );
};

export default SingleList;
