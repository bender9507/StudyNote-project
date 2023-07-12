import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getNotes } from "api/notes";
import * as Styled from "./Main.styles";
import renderDate from "utils/renderDate";
import { PiPencilLineBold } from "react-icons/pi";
import { authorizationUser } from "api/users";

const Main = () => {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("notes", getNotes);

  useEffect(() => {
    const userCheck = async () => {
      try {
        const res = await authorizationUser();
        // if (res !== 200) {
        //   navigate("/login");
        // }
      } catch (error) {
        // 잠깐 메인페이지 들어갔다 나옴 --> 질문하기
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

  //다시 메인페이지로 돌아갈 때 캐시데이터가 key 값이 배열이 아닌 객체가 나와서 에러남.
  //디테일페이지에서 캐시데이터 key 값 다시 설정해줘야함.
  const sortData = [...data].sort(
    (a, b) => new Date(b.noteTime) - new Date(a.noteTime)
  );
  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.Header>
          <h2>Study Note</h2>
          <h5 style={{ color: "#5A4D50" }}>{renderDate()}</h5>
        </Styled.Header>
        <Styled.Pencil>
          <h4 style={{ margin: "0", color: "#5A4D50" }}>
            The more you write, the more you learn.
          </h4>
          <PiPencilLineBold
            size={"35px"}
            color="#5A4D50"
            cursor="pointer"
            onClick={() => {
              navigate("/write");
            }}
          />
        </Styled.Pencil>

        <>
          <Styled.NoteList>
            {sortData?.map(function (item) {
              return (
                <Styled.StyleLink to={`/detail/${item.id}`} key={item.id}>
                  <Styled.NoteBox>
                    <Styled.Note>
                      <Styled.NoteWriter>{item.writer}</Styled.NoteWriter>
                      <div>{item.title}</div>
                    </Styled.Note>

                    <Styled.NoteTime>{item.noteDate}</Styled.NoteTime>
                  </Styled.NoteBox>
                </Styled.StyleLink>
              );
            })}
          </Styled.NoteList>
        </>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default Main;
