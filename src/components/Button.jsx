import React from "react";
import styled from "styled-components";

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  border: 1px solid #5a4d50;
  color: #5a4d50;
  font-weight: bold;
  border-radius: 20px;
  width: 100px;
  padding: 5px;
  margin-top: 7px;
  transition: 0.3s ease;
  &:hover {
    background-color: #5a4d50;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
