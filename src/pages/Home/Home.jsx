import * as Styled from "./Home.styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSmile } from "react-icons/ai";
import Layout from "components/Layout";
import Button from "components/Button";

function Home() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Styled.Container>
        <Styled.Header>
          <AiOutlineSmile size={"50px"} color="#5A4D50" />
          <Styled.HeaderTitle>Study Note</Styled.HeaderTitle>
        </Styled.Header>
        <Styled.ButtonBox>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            LOGIN
          </Button>
          <Button
            onClick={() => {
              navigate("/register");
            }}
          >
            JOIN
          </Button>
        </Styled.ButtonBox>
      </Styled.Container>
    </Layout>
  );
}

export default Home;
