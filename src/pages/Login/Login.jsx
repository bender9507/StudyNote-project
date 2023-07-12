import { authorizationUser, loginUser } from "api/users";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Login.styles";
import { AiOutlineSmile } from "react-icons/ai";

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  // 로그인 버튼 누르면 유저 정보 서버에 보내기
  // 로그인 버튼 누르면 유저 인가, 메인 main 페이지로 이동
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
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.Header>
          <AiOutlineSmile size={"50px"} color="#5A4D50" />
          <Styled.HeaderTitle>LOGIN</Styled.HeaderTitle>
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
              <Styled.Button type="submit">LOGIN</Styled.Button>
            </Styled.ButtonBox>
          </Styled.FormBox>
          {/* <button
            onClick={() => {
              navigate("/register");
            }}
          >
            회원가입
          </button> */}
        </main>
      </Styled.Container>
    </Styled.Layout>
  );
}

export default Login;
