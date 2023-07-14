import styled from "styled-components";

export const ModalBox = styled.div`
  position: absolute;
  /* z-index: 1000; */
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: absolute;
  background-color: #f0d9df;
  /* z-index: 2000; */
  padding: 20px;
  width: 25%;
  height: 20%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  border: 1px solid #5a4d50;
  color: #5a4d50;
  font-weight: bold;
  border-radius: 20px;
  width: 100px;
  padding: 5px;
  margin-top: 7px;
  transition: 0.3s ease;
  &:hover {
    background-color: #5a4d50;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
