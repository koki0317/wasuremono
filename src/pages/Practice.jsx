import React, { useRef, useState } from "react";

const Practice = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const hello = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={hello}>Focus</button>
    </>
  );
};

export default Practice;
