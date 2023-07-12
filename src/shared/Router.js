import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/Home/Home";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Detail from "pages/Detail/Detail";
import Main from "pages/Main/Main";
import Write from "pages/Write/Write";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
