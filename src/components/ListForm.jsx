import { AddCircleOutlineOutlined } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

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

const ListForm = () => {
  const [inputText, setInputText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") return;

    // const { uid } = auth.currentUser;

    const travelItemsRef = doc(
      db,
      "travelItems",
      id.includes("-") ? id.replace("-", " ") : id
    );
    updateDoc(travelItemsRef, {
      name: arrayUnion(`${inputText}`),
    });

    setInputText("");
  };

  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
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
