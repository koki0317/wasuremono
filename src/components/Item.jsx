import React, { useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import ListForm from "./ListForm";

const Icons = styled.div``;

const Item = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return items.map((item, index) => (
    <div
      className={item.isCompleted ? "item-row complete" : "item-row"}
      key={index}
    >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div>
      <Icons></Icons>
    </div>
  ));
};

export default Item;
