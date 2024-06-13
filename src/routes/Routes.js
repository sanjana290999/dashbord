import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import EmployeeList from "../components/employee/Employee";
// import TodoList from "../components/todo/Todo_api";
import Login from "../components/login/Login";
import ResgisterUser from "../components/register/RegisterUser";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import Cookies from "js-cookie";
import ChangePassword from "../components/password/ChangePassword";
import ForgotPassword from "../components/password/ForgotPassword";
import NewPassword from "../components/password/NewPassword";
import Dashbord from "../components/dashbord/Dashbord";
//import UserEditProfile from "../components/profile/Profile.js";
import UserEditProfile from "../components/profile/EditProfile";
import Profile from "../components/profile/UserProfile";
import Logout from "../components/logout/Logout";
// import TodoRedux from "../components/todo/TodoReducx";
import TodoApi from "../components/todoapi/TodoApi";
import LoginApi from "../components/loginApi/LoginApi";
import Signup from "../components/signupApi/SignupApi";
import WithSidebar from "../components/HOC/HocComponent";
import Navbar from "../components/navbar/Navbar";

const publicUrls = ["", "register", "forgot-password"];
const Wrapper = ({ children }) => {
  const token = Cookies.get("token");

  if (
    isEmpty(token) &&
    !publicUrls.includes(window.location.pathname.split("/")[1])
  ) {
    return <Navigate to="/" />;
  } else if (
    !isEmpty(token) &&
    publicUrls.includes(window.location.pathname.split("/")[1])
  ) {
    return <Navigate to="/dashbord" />;
  }
  return children;
};

// const NavbardWithSidebar = WithSidebar(Navbar);
const EmployeedWithSidebar = WithSidebar(EmployeeList);
const TodosWithSidebar = WithSidebar(TodoApi);
const ProfiledWithSidebar = WithSidebar(Profile);

function RouterComponents() {
  return (
    <>
      <Routes>
        <Route
          path="employees"
          element={
            <Wrapper>
              <EmployeedWithSidebar />
            </Wrapper>
          }
        />

        <Route
          path="/"
          element={
            <Wrapper>
              <Login />
            </Wrapper>
          }
        />
        <Route
          path="register"
          element={
            <Wrapper>
              <ResgisterUser />
            </Wrapper>
          }
        />
        <Route
          path="change-password"
          element={
            <Wrapper>
              {" "}
              <ChangePassword />{" "}
            </Wrapper>
          }
        />
        <Route
          path="forgot-password/:token"
          element={
            <Wrapper>
              <NewPassword />
            </Wrapper>
          }
        />
        <Route
          path="forgot-password"
          element={
            <Wrapper>
              <ForgotPassword />
            </Wrapper>
          }
        />
        <Route
          path="dashbord"
          element={
            <Wrapper>
              <Dashbord />
            </Wrapper>
          }
        />
        <Route
          path="edit-profile"
          element={
            <Wrapper>
              <UserEditProfile />{" "}
            </Wrapper>
          }
        />
        <Route
          path="user-profile"
          element={
            <Wrapper>
              <ProfiledWithSidebar />
            </Wrapper>
          }
        />
        <Route
          path="logout"
          element={
            <Wrapper>
              <Logout />{" "}
            </Wrapper>
          }
        />

        <Route
          path="todo-api"
          element={
            <Wrapper>
              <TodosWithSidebar />
            </Wrapper>
          }
        />
        <Route
          path="login-api"
          element={
            <Wrapper>
              <LoginApi />
            </Wrapper>
          }
        />
        <Route
          path="signup-api"
          element={
            <Wrapper>
              <Signup />
            </Wrapper>
          }
        />
      </Routes>
    </>
  );
}

export default RouterComponents;
