import { AddCircleOutlineOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

const ListForm = ({ itemList, setItemList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //add the item
    setItemList([
      ...itemList,
      {
        id: itemList.length,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" onChange={handleChange} value={inputText}></Input>
        <Button>
          <AddCircleOutlineOutlined />
        </Button>
      </Form>
    </Container>
  );
};

export default ListForm;
