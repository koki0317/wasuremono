import { Add } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListInLists from "../components/ListInLists";

const Container = styled.div`
  position: relative;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 15px;
  color: #585858;
`;

const Image = styled.img`
  height: 200px;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const CreateButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background-color: #6c63ff;
  position: absolute;
  top: 0;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Lists = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Your lists</Title>
        <Link to="/create">
          <CreateButton>
            <Add style={{ fontSize: "35px" }} />
          </CreateButton>
        </Link>
        <Image src="undraw_Note_list_re_r4u9.png" />
      </TitleWrapper>
      <ListInLists />
    </Container>
  );
};

export default Lists;
