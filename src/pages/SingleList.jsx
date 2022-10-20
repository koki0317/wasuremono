import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListForm from "../components/ListForm";
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
    // db.collection("travelItems")
    //   .orderBy("createdAt")
    //   .limit(50)
    //   .onSnapshot((snapshot) => {
    //     setTravelItems(
    //       snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //     );
    //   });
    const getTravelItems = async () => {
      const data = await getDocs(travelItemsCollectionRef);
      setTravelItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTravelItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Wrapper>
        <Link to="/create/question3">
          <Image src="undraw_To_do_list_re_9nt7.png" />
        </Link>
        <Title>Travel items</Title>
        <ListForm />
        {/* {Object.values(travelItems[0].travelItem).map((item, { id }) => (
          <SingleItemWrapper key={id}>
            <SingleItem content={item} item={id} tableName={"travelItems"} />
          </SingleItemWrapper>
        ))} */}
      </Wrapper>
    </Container>
  );
};

export default SingleList;
