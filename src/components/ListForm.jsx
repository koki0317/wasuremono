import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
const ListForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add a list"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <Button>Add an item</Button>
      </Form>
    </>
  );
};

export default ListForm;
