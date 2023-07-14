import { editNote, getNote } from "api/notes";
import useNotesMutation from "hooks/useNotesMutation";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./Detail.styles";
import { FaSave } from "react-icons/fa";
import Layout from "components/Layout";
import Modal from "components/Modal/Modal";
import { DETAIL_DELETE_MESSAGE, DETAIL_EDIT_MESSAGE } from "consts";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BiHome } from "react-icons/bi";

function Detail() {
  const [view, setView] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [message, setMessage] = useState("");
  const [modalClick, setModalClick] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const { isLoading, isError, data } = useQuery(
    ["note", params.id],
    () => getNote(params.id),
    { enabled: !!params.id }
  );

  const editMutation = useNotesMutation(editNote);

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
  // 수정 버튼
  const editButtonHandler = () => {
    setReadOnly(false);
  };
  // 수정 내용 저장
  const saveButtonHandler = (e) => {
    e.preventDefault();
    const editedNote = {
      ...data,
      title,
      desc,
    };
    setMessage(DETAIL_EDIT_MESSAGE);
    setModalClick(true);

    editMutation.mutate(editedNote);
  };
  // 삭제 버튼
  const deleteButtonHandler = () => {
    setMessage(DETAIL_DELETE_MESSAGE);
    setModalClick(true);
  };

  if (isLoading) {
    return <h1>로딩 중입니다..</h1>;
  }
  if (isError) {
    return <h1>오류가 발생했습니다..</h1>;
  }
  return (
    <Layout>
      {modalClick && (
        <Modal
          message={message}
          setMessage={setMessage}
          setModalClick={setModalClick}
          id={data.id}
        />
      )}

      <Styled.Container>
        <Styled.DetailHeader>
          <div>
            <Styled.HeaderTitle>MY NOTE</Styled.HeaderTitle>
            <Styled.Date>{new Date(data.date).toDateString()}</Styled.Date>
          </div>

          <Styled.DropdownBox>
            <Styled.HeaderWriter>{data?.writer} 's</Styled.HeaderWriter>
            <Styled.Dropdown
              onClick={() => {
                setView(!view);
              }}
            >
              {view ? "▲" : "▼"}
              {view && (
                <>
                  <li>
                    <BsFillPencilFill onClick={editButtonHandler} />
                  </li>
                  <li>
                    <BsFillTrash3Fill
                      onClick={() => deleteButtonHandler(data?.id)}
                    />
                  </li>
                </>
              )}
            </Styled.Dropdown>
            <BiHome
              size={"20px"}
              color="#5A4D50"
              cursor="pointer"
              onClick={() => {
                navigate("/main");
              }}
            />
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
            />
            {!readOnly && (
              <Styled.SaveButtonBox>
                <button>
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
          />
        </Styled.DetailContent>
      </Styled.Container>
    </Layout>
  );
}

export default Detail;
