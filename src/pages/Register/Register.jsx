import { registerUser } from "api/users";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Register.styles";
import { AiOutlineSmile } from "react-icons/ai";

function Register() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

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
    const RegExp = /^[a-zA-Z0-9]{4,12}$/; //id와 pwassword 유효성 검사 정규식
    //이메일 유효성검사

    const objId = document.getElementById("id"); //아이디
    const objPwd = document.getElementById("password"); //비밀번호
    const objCheckPwd = document.getElementById("checkPassword"); //비밀번호확인

    if (!RegExp.test(objId.value)) {
      //아이디 유효성검사
      alert("아이디는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
      return false;
    }
    if (!RegExp.test(objPwd.value)) {
      //패스워드 유효성검사
      alert("비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
      return false;
    }
    if (objCheckPwd.value != objPwd.value) {
      //비밀번호와 비밀번호확인이 동일한지 검사
      alert("비밀번호가 틀립니다. 다시 확인하여 입력해주세요.");
      return false;
    }

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
              id="id"
              value={id}
              placeholder="아이디"
              required
              onChange={onIdChangeHandler}
            />

            <Styled.InputPw
              type="password"
              id="password"
              value={password}
              placeholder="비밀번호"
              required
              onChange={onPasswordChangeHandler}
            />
            <Styled.InputPw
              type="password"
              id="checkPassword"
              value={checkPassword}
              placeholder="비밀번호 확인"
              required
              onChange={onCheckPasswordChangeHandler}
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
