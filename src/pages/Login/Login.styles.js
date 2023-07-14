import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 5px 5px 20px 5px #e5e5e5;
  border-radius: 40px;

  width: 450px;
  height: 500px;
  padding: 25px;

  background-color: #ebd8dd;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5a4d50;
  padding-top: 80px;
`;
export const HeaderTitle = styled.div`
  font-family: "Dovemayo_gothic";
  font-size: 40px;
  font-weight: 600;
  color: #5a4d50;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
export const Input = styled.input`
  width: 35%;
  height: 25px;
  border-radius: 10px;
  font-size: 15px;
  background-color: #faf5f6;
  border: none;
  padding-left: 10px;
  margin-bottom: 13px;
  &:focus {
    outline: none;
  }
`;
