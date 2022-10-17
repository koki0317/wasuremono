import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

const CreateSingleList = () => {
  const [items, setItems] = useState("");

  return (
    <Container>
      <Form>
        <Input placeholder="Item name" type="text" />
      </Form>
    </Container>
  );
};

export default CreateSingleList;
