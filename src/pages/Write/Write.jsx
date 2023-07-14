import { addNote } from "api/notes";
import useNotesMutation from "hooks/useNotesMutation";
import React, { useEffect, useState } from "react";
import * as Styled from "./Write.styles";
import shortid from "shortid";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { authorizationUser } from "api/users";
import Layout from "components/Layout";
import renderDate from "utils/renderDate";
import { BiHome } from "react-icons/bi";

function Write() {
  useEffect(() => {
    const userCheck = async () => {
      try {
        const res = await authorizationUser();
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };
    userCheck();
  }, []);

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

  const onSubmitButtonHandler = (e) => {
    e.preventDefault();

    const newNote = {
      id: shortid(),
      writer,
      title,
      desc,
      date: new Date(),
    };

    addMutation.mutate(newNote);

    setWriter("");
    setTitle("");
    setDesc("");
    navigate("/main");
  };

  return (
    <Layout>
      <Styled.Container>
        <Styled.DetailContent>
          <Styled.Header>
            <Styled.HeaderTitle>Today's Note</Styled.HeaderTitle>
            <Styled.HeaderBox>
              <Styled.H5>{renderDate()}</Styled.H5>
              <BiHome
                size={"20px"}
                color="#5A4D50"
                cursor="pointer"
                onClick={() => {
                  navigate("/main");
                }}
              />
            </Styled.HeaderBox>
          </Styled.Header>

          <form onSubmit={onSubmitButtonHandler}>
            <Styled.SaveButtonBox>
              <button>
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
              />
              <Styled.DetailTtitle
                type="text"
                value={title}
                placeholder="제목"
                maxLength="24"
                required
                onChange={onTitleChangeHandler}
              />
            </Styled.DetailUpperBox>

            <Styled.DetailDesc
              type="text"
              value={desc}
              placeholder="내용"
              required
              onChange={onDescChangeHandler}
            />
          </form>
        </Styled.DetailContent>
      </Styled.Container>
    </Layout>
  );
}

export default Write;
