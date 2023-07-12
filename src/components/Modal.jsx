import React, { useState } from "react";
import styled from "styled-components";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>여는 버튼</button>
      <div>
        {isOpen && (
          <Modal>
            <p>외부영역 눌러도 닫히지 않음</p>
            <button onClick={closeModal}>닫기</button>
            <button>확인</button>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Modal;

const Modal = styled.div`
  color: black;
  border: 2px solid burlywood;
  border-radius: 30px;

  height: 150px;
  width: 300px;
  margin: auto;
`;
