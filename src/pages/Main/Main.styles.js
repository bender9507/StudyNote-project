import { Link } from "react-router-dom";
import styled from "styled-components";
import "App.css";

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
export const Pencil = styled.div`
  font-family: "Dovemayo_gothic";
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h4 {
    margin: 0;
    color: #5a4d50;
  }
`;

export const NoteList = styled.div`
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
  background-color: #faf5f6;
  border-radius: 15px;

  height: 50px;
  padding: 13px;
  margin-top: 15px;
`;
export const Note = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
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

export const NoteTime = styled.div`
  font-family: "Dovemayo_gothic";
  display: flex;
  font-size: 13px;
  justify-content: right;
  padding-top: 7px;
`;
