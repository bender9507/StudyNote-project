import { authorizationUser, loginUser } from "api/users";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Login.styles";
import { AiOutlineSmile } from "react-icons/ai";
import Modal from "components/Modal/Modal";
import Layout from "components/Layout";
import Button from "components/Button";
import { CONFIRM_MESSAGE } from "consts";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const userCheck = async () => {
      try {
        const res = await authorizationUser();
        navigate("/main");
      } catch (error) {
        console.log(error);
      }
    };
    userCheck();
  }, []);

  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [modalClick, setModalClick] = useState(false);

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(id, password);
      const userCheck = await authorizationUser();
      console.log(userCheck);
      if (userCheck === 200) {
        navigate("/main");
      }
      setId("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setMessage(CONFIRM_MESSAGE);
      setModalClick(true);
    }
  };

  return (
    <Layout>
      {modalClick && (
        <Modal
          message={message}
          setMessage={setMessage}
          setModalClick={setModalClick}
        />
      )}

      <Styled.Container>
        <Styled.Header>
          <AiOutlineSmile size={"50px"} color="#5A4D50" />
          <Styled.HeaderTitle>LOGIN</Styled.HeaderTitle>
        </Styled.Header>
        <main>
          <Styled.FormBox onSubmit={onSubmitButtonHandler}>
            <Styled.Input
              type="text"
              value={id}
              placeholder="아이디를 입력하세요"
              required
              onChange={onIdChangeHandler}
            />

            <Styled.Input
              type="password"
              value={password}
              placeholder="비밀번호를 입력하세요"
              required
              onChange={onPasswordChangeHandler}
            />
            <Styled.ButtonBox>
              <Button type="submit">LOGIN</Button>
            </Styled.ButtonBox>
          </Styled.FormBox>
        </main>
      </Styled.Container>
    </Layout>
  );
}

export default Login;
