import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  margin: 5px 0;
  color: #585858;
  overflow-wrap: break-word;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const SingleItemWrapper = styled.div``;

const TravelItemsWrapper = styled.div`
  margin-top: 20px;
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

  const title = id.replace("-", " ");

  return (
    <Container>
      <Wrapper>
        <Image src="/images/undraw_To_do_list_re_9nt7.png" />
        <Title>{title}</Title>
        <ListForm setTravelItems={setTravelItems} />
        <TravelItemsWrapper>
          {travelItems.map((item, index) => (
            <SingleItemWrapper key={index}>
              <SingleItem content={item} setTravelItems={setTravelItems} />
            </SingleItemWrapper>
          ))}
        </TravelItemsWrapper>
      </Wrapper>
    </Container>
  );
};

export default SingleList;
