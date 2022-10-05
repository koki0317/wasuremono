import { RemoveCircleOutlineOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div``;
const Items = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.div`
  width: 80%;
`;
const Text = styled.div``;
const Span = styled.span``;

// const Quantity = styled.div`
//   padding: 0 5px;
//   margin-right: 5px;
//   border: 1px solid gray;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const QuantityIconWrapper = styled.div`
//   display: flex;
// `;
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

const ItemList = ({ itemList, setItemList }) => {
  const handleDelete = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <Items>
        {itemList.map((item, index) => (
          <Item key={index}>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContentWrapper>
                <Text>
                  <Span>{item.text}</Span>
                </Text>

                <ButtonRemove onClick={() => handleDelete(item.id)}>
                  <RemoveCircleOutlineOutlined />
                </ButtonRemove>
              </ContentWrapper>
            </motion.div>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

export default ItemList;
