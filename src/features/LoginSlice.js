import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
  userLogin: [],
  error: "",
  isLoding: false,
};

export const userLogin = createAsyncThunk("user/login", async (data) => {
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/login`,
      data
    );
    Cookies.set("token", resp.data.data.accessToken, {
      expires: 7,
      secure: true,
    });
    // window.location.reload();
    return resp.data.data;
  } catch (error) {
    console.log("error");
  }
});
const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoding = false;
      state.error = "";
    });
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoding = true;
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    });
  },
});

export default loginSlice.reducer;
