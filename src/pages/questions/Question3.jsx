import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 79vh;
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
  const baseList = {
    1: "Travel guide",
    2: "snacks and drinks",
    3: "Phone charger",
    4: "Toothbrush and paste",
    5: "Soap",
    6: "Shaver",
    7: "T-Shirt",
  };

  const deleteItem = () => {
    answer.pop();
  };

  const [lists, setLists] = useState([]);

  const addList = () => {
    setLists([
      ...lists,
      {
        id: lists.length,
        travelList: baseList,
      },
    ]);
  };

  const box = [];

  lists.forEach((list) => {
    box.push(list.id);
  });
  console.log(box[box.length - 1]);
  // console.log(list);

  // Create a base list in object
  // if choice is selected, autogenerate the list
  // add some specific items to the base list, depending on the answer
  // store its list to setList
  // get the list number that goes into params
  // display the list in lists/:id
  // use List as component

  return (
    <Container>
      <Wrapper>
        3/3
        <Title>Are you taking any medications?</Title>
        <Link>
          <ComponentButton
            content={"Yes"}
            onClick={() => {
              addAnswer("yes");
              addList();
            }}
          />
        </Link>
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
