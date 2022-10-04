import { RemoveCircleOutlineOutlined } from "@mui/icons-material";
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
              <Icon>
                <ButtonRemove onClick={() => handleDelete(item.id)}>
                  <RemoveCircleOutlineOutlined />
                </ButtonRemove>
              </Icon>
            </ContentWrapper>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

export default ItemList;
