import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getNotes } from "api/notes";
import * as Styled from "./Main.styles";
import renderDate from "utils/renderDate";
import { PiPencilLineBold } from "react-icons/pi";

const Main = () => {
  const navigate = useNavigate();

  //getNotes 해서 노트 데이터 가져오기
  // 변경작업이 있을 때 mutation 사용
  // const getMutation = useNotesMutation(getNotes);
  // getMutation.mutate();

  const { isLoading, isError, data } = useQuery("notes", getNotes);
  // useEffect(() => {
  //   data?.sort((a, b) => new Date(b.noteTime) - new Date(a.noteTime));
  // }, [data]);

  if (isLoading) {
    return <h1>로딩 중입니다..</h1>;
  }
  if (isError) {
    return <h1>오류가 발생했습니다..</h1>;
  }
  console.log(data);

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
