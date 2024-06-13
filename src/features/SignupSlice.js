import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  error: "",
  isLoding: false,
};

export const userRegister = createAsyncThunk("user/register", async (data) => {
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/register`,
      data
    );
    return resp.data.data;
  } catch (error) {
    console.log("error");
  }
});

const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.error = "";
      state.isLoding = false;
      //   state.user = action.payload;
    });
    builder.addCase(userRegister.pending, (state, action) => {
      state.error = "";
      state.isLoding = true;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export default signupSlice.reducer;
