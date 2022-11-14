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
  const baseList = ["Travel guide", "snacks and drinks", "Clothes"];

  const deleteItem = () => {
    answer.pop();
  };

  const addExtraItems = () => {
    if (answer[1] === "International") {
      baseList.unshift(
        "Passport",
        "Flight ticket",
        "VISA",
        "International phone charger"
      );
    }

    if (answer[3] === "yes") {
      baseList.unshift("Medicine");
    }
  };
  console.log(answer);

  const path = answer[0].replace(" ", "-");

  const addList = () => {
    const { uid } = auth.currentUser;

    db.collection("travelItems").doc(answer[0]).set({
      name: baseList,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const addItems = (ans) => {
    addAnswer(ans);
    addExtraItems();
    addList();
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
              addItems("yes");
            }}
          />
        </DelayLink>
        <ComponentButton
          content={"No"}
          onClick={() => {
            addItems("no");
          }}
        />
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
