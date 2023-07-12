import { Link } from "react-router-dom";
import styled from "styled-components";
import "App.css";

export const Layout = styled.div`
  max-width: 1200px;
  min-width: 1000px;

  display: flex;
  justify-content: center;

  margin: 130px auto;
`;

export const Container = styled.div`
  box-shadow: 5px 5px 20px 5px #e5e5e5;
  border-radius: 40px;

  width: 450px;
  height: 500px;
  padding: 25px;

  background-color: #ebd8dd;
`;
export const Header = styled.div`
  font-family: "Dovemayo_gothic";
  display: flex;
  justify-content: space-between;
`;
export const Pencil = styled.div`
  font-family: "Dovemayo_gothic";
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const NoteList = styled.div`
  /* border: 1px solid black; */
  margin-top: 50px;
  height: 65%;
  overflow-y: auto;
  border-radius: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NoteBox = styled.div`
  /* border: 1px solid black; */
  background-color: #faf5f6;
  border-radius: 15px;

  height: 50px;
  padding: 13px;
  margin-top: 15px;
`;
export const Note = styled.div`
  display: flex;
  /* border: 1px solid black; */
  width: 100%;
  height: 30px;

  /* margin-bottom: 10px; */
`;
export const NoteWriter = styled.div`
  font-family: "SeoulNamsanM";
  width: 15%;
  font-weight: 500;
  margin-right: 10px;
`;
export const NoteTitle = styled.div`
  font-family: "SeoulNamsanM";
  width: 85%;
  font-weight: 500;
`;
// export const NoteDesc = styled.div`
//   font-family: "OTWelcomeRA";
//   margin-left: 90px;
//   padding-top: 10px;
//   width: 85%
//   height: 40px;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;
export const NoteTime = styled.div`
  font-family: "Dovemayo_gothic";
  display: flex;
  font-size: 13px;
  justify-content: right;
  padding-top: 7px;
`;
