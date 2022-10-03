import {
  CheckCircleOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Items = styled.div``;
const Item = styled.div``;
const Text = styled.div``;
const Span = styled.span``;
const Icons = styled.div``;
const ButtonCheck = styled.button``;
const ButtonRemove = styled.button``;

const ItemList = ({ itemList, setItemList }) => {
  return (
    <Container>
      <Items>
        {itemList.map((item, index) => (
          <Item key={index}>
            <Text>
              <Span>{item.text}</Span>
            </Text>
            <Icons>
              <ButtonCheck>
                <CheckCircleOutlined />
              </ButtonCheck>
              <ButtonRemove>
                <RemoveCircleOutlineOutlined />
              </ButtonRemove>
            </Icons>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

export default ItemList;
