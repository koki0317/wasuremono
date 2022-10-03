import { AddCircleOutlineOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

const ListForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("a");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder=""></Input>
        <Button>
          <AddCircleOutlineOutlined />
        </Button>
      </Form>
    </Container>
  );
};

export default ListForm;
