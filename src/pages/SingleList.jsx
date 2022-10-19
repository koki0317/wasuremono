import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListForm from "../components/ListForm";
import SingleItem from "../components/SingleItem";
import { db } from "../firebase";

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

const SingleItemWrapper = styled.div``;

const SingleList = () => {
  const [travelItems, setTravelItems] = useState([]);

  useEffect(() => {
    db.collection("travelItems")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setTravelItems(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Link to="/create/question3">
          <Image src="undraw_To_do_list_re_9nt7.png" />
        </Link>
        <Title>Travel items</Title>
        <ListForm />
        {console.log(travelItems)}
        {Object.values(travelItems[0].travelItem).map((item, index) => (
          <SingleItemWrapper key={index}>
            <SingleItem content={item} item={index} tableName={"travelItems"} />
          </SingleItemWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SingleList;
