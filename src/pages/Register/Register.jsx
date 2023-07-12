import { registerUser } from "api/users";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Register.styles";
import { AiOutlineSmile } from "react-icons/ai";

function Register() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      await registerUser(id, password);
      setId("");
      setPassword("");
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // 회원가입 버튼 누르면 유저 정보 서버에 보내기
  // 회원가입 버튼 누르면 로그인 페이지로 이동
  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.Header>
          <AiOutlineSmile size={"50px"} color="#5A4D50" />
          <h1>WELCOME</h1>
        </Styled.Header>
        <main>
          <Styled.FormBox onSubmit={onSubmitButtonHandler}>
            <Styled.InputId
              type="text"
              value={id}
              placeholder="아이디를 입력하세요"
              required
              onChange={onIdChangeHandler}
            />
            <br />

            <Styled.InputPw
              type="password"
              value={password}
              placeholder="비밀번호를 입력하세요"
              required
              onChange={onPasswordChangeHandler}
            />
            <Styled.ButtonBox>
              <Styled.Button type="submit">JOIN</Styled.Button>
            </Styled.ButtonBox>
          </Styled.FormBox>
        </main>
      </Styled.Container>
    </Styled.Layout>
  );
}

export default Register;
