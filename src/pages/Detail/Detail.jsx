import { deleteNote, editNote, getNote, getNotes } from "api/notes";

import useNotesMutation from "components/useNotesMutation";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./Detail.styles";
import { FaSave } from "react-icons/fa";

function Detail() {
  const [view, setView] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const navigate = useNavigate();

  const params = useParams();

  const { isLoading, isError, data } = useQuery(
    "notes",
    () => getNote(params.id),
    { enabled: !!params.id }
  );

  const editMutation = useNotesMutation(editNote);
  const deleteMutation = useNotesMutation(deleteNote);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDesc(data.desc);
    }
  }, [data]);

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const onDescChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const editButtonHandler = () => {
    setReadOnly(false);
  };
  const saveButtonHandler = () => {
    const editedNote = {
      ...data,
      title,
      desc,
    };

    editMutation.mutate(editedNote);
    // 게시물 수정 확인 모달, 메인으로 이동
    // navigate("/main");
  };

  //삭제 버튼 클릭
  const clickDeleteButtonHandler = (id) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;
    else if (confirmDelete) alert("게시물이 삭제되었습니다.");
    deleteMutation.mutate(id);
    navigate("/main");
  };

  if (isLoading) {
    return <h1>로딩 중입니다..</h1>;
  }
  if (isError) {
    return <h1>오류가 발생했습니다..</h1>;
  }
  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.DetailHeader>
          <div>
            <Styled.HeaderTitle>MY NOTE</Styled.HeaderTitle>
            <div>{data?.noteDate}</div>
          </div>

          <Styled.DropdownBox>
            <Styled.HeaderWriter>{data?.writer}</Styled.HeaderWriter>
            <Styled.Dropdown
              onClick={() => {
                setView(!view);
              }}
            >
              {view ? "▲" : "▼"}
              {view && (
                <>
                  <li onClick={editButtonHandler}>수정</li>
                  <li onClick={() => clickDeleteButtonHandler(data?.id)}>
                    삭제
                  </li>
                </>
              )}
            </Styled.Dropdown>
          </Styled.DropdownBox>
        </Styled.DetailHeader>

        <Styled.DetailContent>
          <Styled.DetailUpperBox>
            <Styled.DetailTtitle
              type="text"
              value={title}
              placeholder="제목"
              maxLength="24"
              required
              readOnly={readOnly}
              onChange={onTitleChangeHandler}
            ></Styled.DetailTtitle>
            {/* <button onClick={saveButtonHandler}>수정 완료</button> */}
            {!readOnly && (
              <Styled.SaveButtonBox>
                <button style={{ background: "transparent", border: "none" }}>
                  <FaSave
                    size={"35px"}
                    color="#5A4D50"
                    cursor="pointer"
                    onClick={saveButtonHandler}
                  />
                </button>
              </Styled.SaveButtonBox>
            )}
          </Styled.DetailUpperBox>

          <Styled.DetailDesc
            type="text"
            value={desc}
            placeholder="내용"
            required
            readOnly={readOnly}
            onChange={onDescChangeHandler}
          ></Styled.DetailDesc>
          {/* <Styled.DetailTtitle>{data?.title}</Styled.DetailTtitle>
          <Styled.DetailDesc>{data?.desc}</Styled.DetailDesc> */}
        </Styled.DetailContent>
      </Styled.Container>
    </Styled.Layout>
  );
}

export default Detail;
