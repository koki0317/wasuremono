import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ListForm from "../components/ListForm";
import { db } from "../firebase";
import SingleItem from "../components/SingleItem";
import { doc, getDoc } from "firebase/firestore";

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

  const { id } = useParams();

  useEffect(() => {
    const getTravelItems = async () => {
      const docRef = doc(
        db,
        "travelItems",
        id.includes("-") ? id.replace("-", " ") : id
      );

      const docSnap = await getDoc(docRef);

      setTravelItems(docSnap.data().name);
    };

    getTravelItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(travelItems);

  return (
    <Container>
      <Wrapper>
        <Link to="/create/question3">
          <Image src="/images/undraw_To_do_list_re_9nt7.png" />
        </Link>
        <Title>Travel items</Title>
        <ListForm setTravelItems={setTravelItems} />
        <TravelItemsWrapper>
          {travelItems.map((item, index) => (
            <SingleItemWrapper key={index}>
              <SingleItem content={item} />
            </SingleItemWrapper>
          ))}
        </TravelItemsWrapper>
      </Wrapper>
    </Container>
  );
};

export default SingleList;
