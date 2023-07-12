import axios from "axios";

// note 데이터 조회 REACT_APP_SERVER_URL

const getNotes = async () => {
  console.log("getNotes호출");
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/notes`);
  return response.data;
};
const getNote = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/notes/${id}`
  );
  return response.data;
};

// note 추가
// 추가
const addNote = async (newNote) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/notes`, newNote);
};
//수정
const editNote = async (editedNote) => {
  console.log("editNote");
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/notes/${editedNote.id}`,
    editedNote
  );
};
//삭제
const deleteNote = async (id) => {
  console.log(id);
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/notes/${id}`);
};

export { getNotes, getNote, addNote, editNote, deleteNote };
