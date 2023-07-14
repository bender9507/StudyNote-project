# ✨ StudyNote 개인과제 ver.4+5 ✨

- ver.4 : Custom Hook 적용, Form 유효성 체크
- ver.5 : 로그인/회원가입 기능 추가

## 🔧 기술 스택

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

## 📌 API 명세

<img width="906" alt="스크린샷 2023-07-14 오후 12 11 45" src="https://github.com/bender9507/todolist-project-done/assets/125546973/cc5e55c3-fc76-4d55-a169-4d450c30fcd7">

## 🗂️ 주요 폴더

```sh
📦server
 ┃ ┣ 📂db.json              # json 서버
 ┃ ┗ 📂index.js
📦src
 ┣ 📂api                    # API 요청 함수를 모아놓은 폴더
 ┣ 📂components             # 컴포넌트들을 모아놓은 폴더
 ┃ ┣ 📂Modal.jsx            # modal 컴포넌트
 ┃ ┣ 📂Button.jsx           # Button 컴포넌트
 ┃ ┗ 📂Layout.jsx           # Layout 영역 컴포넌트
 ┣ 📂hooks                  # hooks를 모아놓은 폴더
 ┣ 📂pages                  # 페이지별 컴포넌트를 모아놓은 폴더
 ┃ ┣ 📂Home.jsx             # 초기화면을 보여주는 컴포넌트
 ┃ ┣ 📂Register.jsx         # 회원가입 페이지를 보여주는 컴포넌트
 ┃ ┣ 📂Login.jsx            # 로그인 페이지를 보여주는 컴포넌트
 ┃ ┣ 📂Main.jsx             # 메인 페이지를 보여주는 컴포넌트
 ┃ ┣ 📂Detail.jsx           # 상세 페이지를 보여주는 컴포넌트
 ┃ ┗ 📂Write.jsx            # 작성 페이지를 보여주는 컴포넌트
 ┣ 📂const                  # 상수를 모아놓은 폴더
 ┣ 📂shared                 # React Router Dom 설정하는 폴더
 ┃ ┗📂Router.js             # Router 설정 파일
 ┣ 📂utils                  # 기타 기능(날짜)
 ┃ ┗📂renderDate.js

```

## 내용

- 작성 버튼으로 note 내용을 입력할 수 있다.
- 각 게시글 상세 페이지에 있는 수정, 삭제 버튼으로 게시글 상태가 변경된다.
  - 삭제 버튼으로 확인 모달창이 나오고 게시글을 삭제할 수 있다.
  - 수정 버튼을 누르면 게시글 내용 영역이 활성화되어 내용을 수정할 수 있다.
  - 다시 저장 버튼을 누르면 수정된 내용으로 업데이트 된다.
- 홈버튼을 누르면 note 리스트가 있는 메인 페이지로 이동한다.
- 로그아웃 버튼을 누르면 로그아웃 상태가 되면서 홈 초기페이지로 이동한다.
- 로그인이 된 상태면 메인 페이지에서 로그인 페이지로 접근이 불가하다.
- 로그아웃이 된 상태면 메인 페이지나 상세 페이지로 접근이 불가하다.
