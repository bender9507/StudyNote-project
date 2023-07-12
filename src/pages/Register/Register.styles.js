import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1200px;
  min-width: 1000px;

  display: flex;
  justify-content: center;

  margin: 130px auto;
`;

export const Container = styled.div`
  /* font-family: 'Cafe24Ssurround'; */

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
  padding-top: 20px;
`;
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
export const InputId = styled.input`
  width: 35%;
  height: 25px;
  border-radius: 10px;
  font-size: 15px;
  background-color: #faf5f6;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
export const InputPw = styled.input`
  width: 35%;
  height: 25px;
  border-radius: 10px;
  font-size: 15px;
  background-color: #faf5f6;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
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
