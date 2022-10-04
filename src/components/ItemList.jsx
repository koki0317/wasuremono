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
  border: 1px solid black;
`;

const ButtonRemove = styled.button``;

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
