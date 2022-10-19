import { RemoveCircleOutlineOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1px;
`;
const Item = styled.div`
  width: 80%;
`;
const Text = styled.div``;
const Span = styled.span`
  padding-left: 5px;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border: 1px solid #6c63ff;
  margin-bottom: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const ButtonRemove = styled.button`
  color: white;
  border: none;
  background-color: #6c63ff;
  display: flex;
  align-items: center;
  height: 30px;
`;

const SingleItem = ({ content, item, tableName }) => {
  return (
    <Container>
      <Item>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContentWrapper>
            <Text>
              <Span>{content}</Span>
            </Text>
            <ButtonRemove>
              <RemoveCircleOutlineOutlined
                onClick={() => db.collection(`${tableName}`).doc(item).delete()}
              />
            </ButtonRemove>
          </ContentWrapper>
        </motion.div>
      </Item>
    </Container>
  );
};

export default SingleItem;
