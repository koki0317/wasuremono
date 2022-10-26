import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../../components/Button";
import DelayLink from "../../components/DelayLink";
import { auth, db } from "../../firebase";
import firebase from "firebase/compat/app";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 73vh;
  padding-top: 100px;
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: 400;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Question3 = ({ addAnswer, answer }) => {
  const baseList = ["Travel guide", "snacks and drinks", "Phone charger"];

  const deleteItem = () => {
    answer.pop();
  };

  const path = answer[0].replace(" ", "-");

  const addList = () => {
    const { uid } = auth.currentUser;

    db.collection("travelItems").add({
      name: baseList,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <Container>
      <Wrapper>
        3/3
        <Title>Are you taking any medications?</Title>
        <DelayLink delay={2000} to={`/lists/${path}`}>
          <ComponentButton
            content={"Yes"}
            onClick={() => {
              addAnswer("yes");
              addList();
            }}
          />
        </DelayLink>
        <ComponentButton content={"No"} onClick={() => addAnswer("no")} />
        <Link to="/create/question2">
          <ComponentButton
            content={"Back"}
            backgroundColor={"rgba(0, 0, 0, 0.7)"}
            onClick={() => deleteItem()}
          />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Question3;
