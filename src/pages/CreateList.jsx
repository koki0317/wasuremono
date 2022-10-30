import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ComponentButton from "../components/Button";
import { motion } from "framer-motion";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: 73vh;
  background: url("undraw_i_can_fly_7egl.png");
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-top: 15px;
  color: black;
  margin-bottom: 30px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
  font-style: italic;
  font-weight: 800;
`;

const containerVariants = {
  hidden: {
    opacity: 0,
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5,
      },
      exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" },
      },
    },
  },
};

const CreateList = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <Wrapper>
          <Title>
            Create your list{" "}
            <span style={{ color: "red", fontSize: "28px" }}>easily</span> by
            answering a few questions!{" "}
          </Title>
          <Link to="/create/title">
            <ComponentButton content={"CREATE"}></ComponentButton>
          </Link>
          <Link to="/lists">
            <ComponentButton
              content={"Back"}
              backgroundColor={"rgba(0, 0, 0, 0.7)"}
            ></ComponentButton>
          </Link>
        </Wrapper>
      </Container>
    </motion.div>
  );
};

export default CreateList;
