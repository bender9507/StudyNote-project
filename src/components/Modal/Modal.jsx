import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Modal.styles";
import { SIGNUP_COMPLETE_MESSAGE } from "consts";
import { DETAIL_DELETE_MESSAGE } from "consts";
import { DETAIL_EDIT_MESSAGE } from "consts";
import useNotesMutation from "hooks/useNotesMutation";
import { deleteNote } from "api/notes";

function Modal({ message, setModalClick, id }) {
  const navigate = useNavigate();
  const deleteMutation = useNotesMutation(deleteNote);

  const closeModal = () => {
    setModalClick(false);
  };
  const buttonClicked = () => {
    closeModal();
    if (message === SIGNUP_COMPLETE_MESSAGE) navigate("/login");
    else if (message === DETAIL_DELETE_MESSAGE) {
      deleteMutation.mutate(id);
      navigate("/main");
    } else if (message === DETAIL_EDIT_MESSAGE) navigate("/main");
  };

  return (
    <>
      <Styled.ModalBox>
        <Styled.Modal>
          <p>{message ? message : "오류가 발생했습니다."}</p>
          <Styled.Button onClick={buttonClicked}>확인</Styled.Button>
          {message === DETAIL_DELETE_MESSAGE && (
            <Styled.Button onClick={closeModal}>취소</Styled.Button>
          )}
        </Styled.Modal>
      </Styled.ModalBox>
    </>
  );
}

export default Modal;
