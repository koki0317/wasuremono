import React, { useState } from "react";

export const GenerateList = () => {
  const baseList = {
    1: "Travel guide",
    2: "snacks and drinks",
    3: "Phone charger",
    4: "Toothbrush and paste",
    5: "Soap",
    6: "Shaver",
  };

  const [list, setList] = useState([]);

  const addList = () => {
    setList([
      ...list,
      {
        id: list.length,
        travelList: baseList,
      },
    ]);
  };

  // list.forEach((a, index) => {
  //   console.log(a.id);
  // });
  console.log(list.id);

  // Create a base list in object
  // if choice is selected, autogenerate the list
  // add some specific items to the base list, depending on the answer
  // store its list to setList
  // get the list number that goes into params
  // display the list in lists/:id
  // use List as component
  return <div>generateList</div>;
};
