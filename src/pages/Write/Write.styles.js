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
export const DetailContent = styled.div`
  /* padding: 5px; */
  /* background-color: #fbf7f8; */
  /* border: 1px solid black; */
  border-radius: 10px;
`;

export const DetailHeader = styled.div`
  display: flex;
  width: 460px;
  justify-content: space-between;
  /* border: 1px solid black; */

  height: 70px;
  margin-bottom: 50px;
`;
export const SaveButtonBox = styled.div`
  display: flex;

  justify-content: flex-end;
  padding-bottom: 30px;
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
  display: flex;
  align-items: center;
  height: 30px;
  width: 65%;
  font-size: 18px;
  background-color: #faf5f6;
  border: none;
  padding-left: 10px;

  margin-bottom: 25px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export const DetailDesc = styled.textarea`
  font-size: 18px;
  width: 430px;
  height: 260px;
  border-radius: 20px;

  background-color: #faf5f6;
  border: none;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;
// export const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// export const Pencil = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
// `;

// export const NoteList = styled.div`
//   /* border: 1px solid black; */
//   margin-top: 50px;
//   height: 68%;
//   overflow-y: auto;
//   border-radius: 10px;
// `;

// export const NoteBox = styled.div`
//   /* border: 1px solid black; */
//   background-color: #faf5f6;
//   border-radius: 15px;

//   height: 50px;
//   padding: 13px;
//   margin-top: 15px;
// `;
// export const Note = styled.div`
//   display: flex;
//   /* border: 1px solid black; */
//   width: 100%;
//   height: 30px;

//   /* margin-bottom: 10px; */
// `;
// export const NoteWriter = styled.div`
//   width: 15%;
//   font-weight: 600;
//   margin-right: 10px;
// `;
// export const NoteDesc = styled.div`
//   margin-left: 90px;
//   padding-top: 10px;
//   width: 85%
//   height: 40px;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;
// export const NoteTime = styled.div`
//   display: flex;
//   font-size: 13px;
//   justify-content: right;
//   padding-top: 7px;
// `;
