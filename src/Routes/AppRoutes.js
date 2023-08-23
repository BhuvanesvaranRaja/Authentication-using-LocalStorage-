import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "../Pages/SignUp";
import StyledComponents from "../Pages/StyledComponents";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Dashboard from "../Pages/dashboard";

export default class AppRoutes extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/styled" element={<StyledComponents />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </>
    );
  }
}
