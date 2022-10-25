import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ListForm from "../components/ListForm";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SingleItem from "../components/SingleItem";

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

const TravelItemsWrapper = styled.div`
  margin-top: 30px;
`;

const SingleList = () => {
  const [travelItems, setTravelItems] = useState([]);

  // const travelItemsCollectionRef = collection(db, "travelItems");

  const { id } = useParams();

  useEffect(() => {
    db.collection(`travelItems${id}`)
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setTravelItems(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    // const getTravelItems = async () => {
    //   const data = await getDocs(travelItemsCollectionRef);
    //   setTravelItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };
    // getTravelItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Wrapper>
        <Link to="/create/question3">
          <Image src="/images/undraw_To_do_list_re_9nt7.png" />
        </Link>
        <Title>Travel items {id}</Title>
        <ListForm collectionItem={`travelItems${id}`} />
        <TravelItemsWrapper>
          {travelItems.map(({ name, id }) => (
            <SingleItemWrapper key={id}>
              <SingleItem content={name} item={id} tableName={"travelItems"} />
            </SingleItemWrapper>
          ))}
        </TravelItemsWrapper>
      </Wrapper>
    </Container>
  );
};

export default SingleList;
