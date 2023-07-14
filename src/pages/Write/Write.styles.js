import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 5px 5px 20px 5px #e5e5e5;
  border-radius: 40px;

  width: 450px;
  height: 500px;
  padding: 25px;

  background-color: #ebd8dd;
`;
export const DetailContent = styled.div`
  border-radius: 10px;
`;
export const HeaderTitle = styled.div`
  font-family: "Dovemayo_gothic";
  font-size: 35px;
  font-weight: 600;
  color: #5a4d50;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Header = styled.div`
  font-family: "Dovemayo_gothic";
  display: flex;
  justify-content: space-between;
`;
export const HeaderBox = styled.div`
  font-family: "Dovemayo_gothic";
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const H5 = styled.h5`
  font-family: "Dovemayo_gothic";
  color: #5a4d50;
  display: flex;
  padding-right: 5px;
`;
export const SaveButtonBox = styled.div`
  display: flex;

  justify-content: flex-end;
  padding-bottom: 30px;
  button {
    background: transparent;
    border: none;
  }
`;

export const DetailUpperBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const DetailWriter = styled.input`
  display: flex;
  align-items: center;
  height: 30px;
  width: 30%;
  font-family: "SeoulNamsanM";

  font-size: 18px;
  background-color: #faf5f6;
  border: none;

  padding-left: 10px;
  margin-right: 10px;
  margin-bottom: 25px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export const DetailTtitle = styled.input`
  font-family: "SeoulNamsanM";

  display: flex;
  align-items: center;
  height: 30px;
  width: 65%;
  font-size: 18px;
  background-color: #faf5f6;
  border: none;
  padding-left: 15px;

  margin-bottom: 25px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export const DetailDesc = styled.textarea`
  font-family: "SeoulNamsanM";
  font-size: 18px;
  line-height: 1.4;
  width: 420px;
  height: 250px;
  border-radius: 20px;

  background-color: #faf5f6;
  border: none;
  padding: 15px;
  &:focus {
    outline: none;
  }
`;
