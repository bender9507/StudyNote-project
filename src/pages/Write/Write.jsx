import { addNote } from "api/notes";
import useNotesMutation from "components/useNotesMutation";
import React, { useState } from "react";
import * as Styled from "./Write.styles";
import shortid from "shortid";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Write() {
  const date = new Date();
  const noteDate = date.toDateString();

  const navigate = useNavigate();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addMutation = useNotesMutation(addNote);

  const onWriterChangeHandler = (event) => {
    setWriter(event.target.value);
  };
  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const onDescChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  // 게시글 저장 버튼 누르면 게시글 내용 서버에 보내기
  // 그리고 메인 페이지로 이동
  const onSubmitButtonHandler = (e) => {
    e.preventDefault();

    const newNote = {
      id: shortid(),
      writer,
      title,
      desc,
      noteTime: date,
      noteDate,
    };

    addMutation.mutate(newNote);

    setWriter("");
    setTitle("");
    setDesc("");
    navigate("/main");
  };
  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.DetailContent>
          <h1 style={{ margintop: "30px", color: "#5A4D50" }}>Today's Note</h1>
          <form onSubmit={onSubmitButtonHandler}>
            <Styled.SaveButtonBox>
              <button style={{ background: "transparent", border: "none" }}>
                <FaSave size={"35px"} color="#5A4D50" cursor="pointer" />
              </button>
            </Styled.SaveButtonBox>

            <Styled.DetailUpperBox>
              <Styled.DetailWriter
                type="text"
                value={writer}
                placeholder="작성자"
                maxLength="4"
                required
                onChange={onWriterChangeHandler}
              ></Styled.DetailWriter>
              <Styled.DetailTtitle
                type="text"
                value={title}
                placeholder="제목"
                maxLength="24"
                required
                onChange={onTitleChangeHandler}
              ></Styled.DetailTtitle>
            </Styled.DetailUpperBox>

            <Styled.DetailDesc
              type="text"
              value={desc}
              placeholder="내용"
              required
              onChange={onDescChangeHandler}
            ></Styled.DetailDesc>
          </form>
        </Styled.DetailContent>
      </Styled.Container>
    </Styled.Layout>
  );
}

export default Write;
