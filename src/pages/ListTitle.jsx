import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../components/Button";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 73vh;
  padding-top: 100px;
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 30px;
  padding: 5px 20px;
  width: 80%;
  outline: none;
  border-radius: 3px;
  font-size: 18px;
  border: 2px solid rgba(0, 0, 0, 0.7);
`;

const ListTitle = ({ addAnswer }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    addAnswer(inputText);
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <Wrapper>
          <Title>Name the list title.</Title>
          <Input
            ref={inputRef}
            maxlength="18"
            placeholder="List name"
            onChange={handleChange}
          />
          <Link to="/create/question1">
            <ComponentButton
              content={"NEXT"}
              onClick={() => handleClick()}
              disabled={!inputText ? true : false}
            />
          </Link>
          <Link to="/create">
            <ComponentButton
              backgroundColor={"rgba(0, 0, 0, 0.7)"}
              content={"Back"}
            />
          </Link>
        </Wrapper>
      </Container>
    </motion.div>
  );
};

export default ListTitle;
