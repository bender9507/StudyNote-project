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

export const DetailHeader = styled.div`
  display: flex;
  width: 460px;
  justify-content: space-between;
  /* border: 1px solid black; */

  height: 70px;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const HeaderTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: #5a4d50;
  margin-bottom: 10px;
`;
export const HeaderWriter = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 10px;
  font-size: 16px;
`;
export const DetailContent = styled.form`
  /* padding: 5px; */
  /* background-color: #fbf7f8; */
  /* border: 1px solid black; */
  border-radius: 10px;
`;
export const DetailUpperBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SaveButtonBox = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: flex-start;
  /* padding-bottom: 30px; */
`;
// export const DetailTtitle = styled.div`
//   display: flex;
//   align-items: center;
//   height: 35px;
//   font-size: 20px;
//   background-color: #faf5f6;
//   /* border: 1px solid black; */
//   padding-left: 10px;

//   margin-bottom: 25px;
//   border-radius: 15px;
// `;
// export const DetailDesc = styled.div`
//   font-size: 18px;

//   height: 250px;
//   border-radius: 15px;

//   background-color: #faf5f6;
//   /* border: 1px solid black; */
//   padding: 10px;
//   overflow-y: auto;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;
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
export const DropdownBox = styled.div`
  display: flex;
  width: auto;
  padding: 0;
  padding-top: 20px;
  margin: 0;
`;
export const Dropdown = styled.ul`
  width: 33px;
  padding: 0;
  margin: 0;
  list-style: none;
`;
// export const Note = styled.div`
//   display: flex;
//   border: 1px solid black;
//   width: 100%;
//   height: 30px;

//   /* margin-bottom: 10px; */
// `;
// export const NoteWriter = styled.div`
//   width: 80px;
//   margin-right: 10px;
// `;
// export const NoteDesc = styled.div`
//   margin-left: 90px;
// `;
