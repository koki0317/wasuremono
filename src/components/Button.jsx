import styled from "styled-components";
import React from "react";

const Button = styled.button`
  width: 200px;
  background-color: #6c63ff;
  border: none;
  border-radius: 3px;
  padding: 5px 0;
  font-size: 20px;
  color: white;
  font-weight: 600;
  box-shadow: 0 5px 0 #c2c0c0;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0.93;
  margin-bottom: 30px;

  &:active {
    transform: translateY(4px);
    border-bottom: none;
  }

  &:hover {
    opacity: 1;
  }
`;

const ComponentButton = ({ content, backgroundColor, onClick, disabled }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {content}
    </Button>
  );
};

export default ComponentButton;
