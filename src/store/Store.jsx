import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoSlice";
import todoApiReducer from "../features/TodoApiSlice";
import loginReducer from "../features/LoginSlice";
import signupReducer from "../features/SignupSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoApi: todoApiReducer,
    login: loginReducer,
    signup: signupReducer,
  },
});
