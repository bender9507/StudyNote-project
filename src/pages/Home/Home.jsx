import * as Styled from "./Home.styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSmile } from "react-icons/ai";

function Home() {
  const navigate = useNavigate();
  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.Header>
          <AiOutlineSmile size={"50px"} color="#5A4D50" />
          <h1>Study Note</h1>
        </Styled.Header>
        <Styled.ButtonBox>
          <Styled.Button
            onClick={() => {
              navigate("/login");
            }}
          >
            LOGIN
          </Styled.Button>
          <Styled.Button
            onClick={() => {
              navigate("/register");
            }}
          >
            JOIN
          </Styled.Button>
        </Styled.ButtonBox>
      </Styled.Container>
    </Styled.Layout>
  );
}

export default Home;
