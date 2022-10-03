import React, { useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import ListForm from "./ListForm";

const Item = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return Items.map((item, index) => (
    <div
      className={item.isCompleted ? "item-row complete" : "item-row"}
      key={index}
    ></div>
  ));
};

export default Item;
