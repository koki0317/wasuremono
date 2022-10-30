import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../../components/Button";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 73vh;
  padding-top: 100px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: 400;
  margin-bottom: 30px;
`;

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

const Question1 = ({ addAnswer, answer }) => {
  const deleteItem = () => {
    answer.pop();
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
          1/3
          <Title>
            Domestic <br />
            or <br />
            International travel?
          </Title>
          <Link to="/create/question2">
            <ComponentButton
              content={"Domestic"}
              onClick={() => addAnswer("Domestic")}
            />
          </Link>
          <Link to="/create/question2">
            <ComponentButton
              content={"International"}
              onClick={() => addAnswer("International")}
            />
          </Link>
          <Link to="/create/title">
            <ComponentButton
              backgroundColor={"rgba(0, 0, 0, 0.7)"}
              content={"Back"}
              onClick={() => deleteItem()}
            />
          </Link>
        </Wrapper>
      </Container>
    </motion.div>
  );
};

export default Question1;
