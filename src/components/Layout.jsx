import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;

const StyledLayout = styled.div`
  max-width: 1200px;
  min-width: 700px;

  display: flex;
  justify-content: center;

  margin: 130px auto;
`;
