import { registerUser } from "api/users";
import React, { useState } from "react";
import * as Styled from "./Register.styles";
import { AiOutlineSmile } from "react-icons/ai";
import Modal from "components/Modal/Modal";
import Layout from "components/Layout";
import { SIGNUP_COMPLETE_MESSAGE, SIGNUP_ERROR_MESSAGE } from "consts";
import Button from "components/Button";

function Register() {
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [modalClick, setModalClick] = useState(false);

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onCheckPasswordChangeHandler = (event) => {
    setCheckPassword(event.target.value);
  };

  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();
    if (id.length < 4 || id.length > 12) {
      setMessage("아이디는 4~12자로 입력해주세요.");
      setModalClick(true);

      return;
    }
    if (password.length < 4 || password.length > 12) {
      setMessage("비밀번호는 4~12자로 입력해주세요.");
      setModalClick(true);

      return;
    }
    if (password !== checkPassword) {
      setMessage("비밀번호를 확인해주세요.");
      setModalClick(true);

      return;
    }

    try {
      await registerUser(id, password);
      setId("");
      setPassword("");
      setCheckPassword("");
      setMessage(SIGNUP_COMPLETE_MESSAGE);
      setModalClick(true);
    } catch (error) {
      setMessage(SIGNUP_ERROR_MESSAGE);
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
          <Styled.HeaderTitle>WELCOME</Styled.HeaderTitle>
        </Styled.Header>
        <main>
          <Styled.FormBox onSubmit={onSubmitButtonHandler}>
            <Styled.InputId
              type="text"
              value={id}
              placeholder="아이디"
              required
              onChange={onIdChangeHandler}
            />

            <Styled.InputPw
              type="password"
              value={password}
              placeholder="비밀번호"
              required
              onChange={onPasswordChangeHandler}
            />
            <Styled.InputPw
              type="password"
              value={checkPassword}
              placeholder="비밀번호 확인"
              required
              onChange={onCheckPasswordChangeHandler}
            />
            <Styled.ButtonBox>
              <Button type="submit">JOIN</Button>
            </Styled.ButtonBox>
          </Styled.FormBox>
        </main>
      </Styled.Container>
    </Layout>
  );
}

export default Register;
