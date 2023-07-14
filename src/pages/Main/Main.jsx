import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getNotes } from "api/notes";
import * as Styled from "./Main.styles";
import renderDate from "utils/renderDate";
import { PiPencilLineBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { authorizationUser } from "api/users";
import Layout from "components/Layout";

const Main = () => {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("notes", getNotes);

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

  if (isLoading) {
    return <h1>로딩 중입니다..</h1>;
  }
  if (isError) {
    return <h1>오류가 발생했습니다..</h1>;
  }
  const logOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const sortData = [...data].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <Layout>
      <Styled.Container>
        <Styled.Header>
          <h2>Study Note</h2>
          <Styled.HeaderBox>
            <Styled.H5>{renderDate()}</Styled.H5>
            <MdLogout
              size={"20px"}
              color="#5A4D50"
              cursor="pointer"
              onClick={logOut}
            />
          </Styled.HeaderBox>
        </Styled.Header>
        <Styled.Pencil>
          <h4>The more you write, the more you learn.</h4>
          <PiPencilLineBold
            size={"35px"}
            color="#5A4D50"
            cursor="pointer"
            onClick={() => {
              navigate("/write");
            }}
          />
        </Styled.Pencil>

        <Styled.NoteList>
          {sortData?.map(function (item) {
            return (
              <Styled.StyleLink to={`/detail/${item.id}`} key={item.id}>
                <Styled.NoteBox>
                  <Styled.Note>
                    <Styled.NoteWriter>{item.writer}</Styled.NoteWriter>
                    <Styled.NoteTitle>{item.title}</Styled.NoteTitle>
                  </Styled.Note>

                  <Styled.NoteTime>
                    {new Date(item.date).toDateString()}
                  </Styled.NoteTime>
                </Styled.NoteBox>
              </Styled.StyleLink>
            );
          })}
        </Styled.NoteList>
      </Styled.Container>
    </Layout>
  );
};

export default Main;
