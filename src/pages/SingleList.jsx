import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListForm from "../components/ListForm";
import SingleItem from "../components/SingleItem";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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

  const travelItemsCollectionRef = collection(db, "travelItems");

  useEffect(() => {
    const getTravelItems = async () => {
      const data = await getDocs(travelItemsCollectionRef);
      setTravelItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTravelItems();
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
