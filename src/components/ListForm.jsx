import { AddCircleOutlineOutlined } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.form`
  display: inline-flex;
  /* align-items: center; */

  border: 2px solid #6c63ff;
`;
const Input = styled.input`
  width: 200px;
  border: none;
  outline: none;
  font-size: 20px;
`;
const Button = styled.button`
  border: none;
  color: white;
  background-color: #6c63ff;
  display: flex;
  align-items: center;
`;
const FormWrapper = styled.div``;

const ListForm = ({ itemList, setItemList }) => {
  const [inputText, setInputText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") return;

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
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleChange}
            value={inputText}
            placeholder="item name"
            ref={inputRef}
          ></Input>
          <Button>
            <AddCircleOutlineOutlined />
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default ListForm;
