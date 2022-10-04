import { Clear, RemoveCircleOutlineOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

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
const Icon = styled.div``;
const Quantity = styled.div`
  padding: 0 5px;
  margin-right: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const QuantityIconWrapper = styled.div`
  display: flex;
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
  background-color: #6c63ff;
  border: none;
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
            <ContentWrapper>
              <Text>
                <Span>{item.text}</Span>
              </Text>
              <QuantityIconWrapper>
                <Quantity>
                  <Clear style={{ fontSize: "15px" }} />1
                </Quantity>
                <Icon>
                  <ButtonRemove onClick={() => handleDelete(item.id)}>
                    <RemoveCircleOutlineOutlined />
                  </ButtonRemove>
                </Icon>
              </QuantityIconWrapper>
            </ContentWrapper>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

export default ItemList;
