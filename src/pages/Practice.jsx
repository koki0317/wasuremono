import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

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
      <Link to="/create/question3">
        <button onClick={hello}>Focus</button>
      </Link>
    </>
  );
};

export default Practice;
