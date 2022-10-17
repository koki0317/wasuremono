import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

const CreateSingleList = () => {
  const [item, setItem] = useState("");
  const setItems = (e) => {
    e.preventDefault();

    db.collection("items").add({
      item: item,
    });
    setItem("");
  };

  return (
    <Container>
      <Form onSubmit={setItems}>
        <Input
          placeholder="Item name"
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
      </Form>
    </Container>
  );
};

export default CreateSingleList;
