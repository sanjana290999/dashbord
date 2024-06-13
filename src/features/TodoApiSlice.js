import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoding: false,
  error: "",
  todos: [],
};

export const getTodo = createAsyncThunk("todo/get", async () => {
  try {
    const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);
    console.log({ resp });
    return resp.data.data;
  } catch (error) {
    return error.message;
  }
});

export const addTodo = createAsyncThunk("todo/post", async (data) => {
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/todos`,
      data
    );

    return resp.data.data;
  } catch (error) {
    // error.message;
  }
});

export const editTodo = createAsyncThunk("todo/edit", async (data) => {
  try {
    const resp = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/todos/${data.id}`,
      data.data
    );
    console.log({ data });
    return resp.data.data;
  } catch (error) {
    // error.message;
  }
});
export const deleteTodo = createAsyncThunk("todo/delete", async (_id) => {
  try {
    const resp = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/todos/${_id}`
    );
  } catch (error) {
    // error.message;
    console.log("error", error.resp.data.data);
  }
});

const todoApiSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.isLoding = false;
      state.error = "";
      state.todos = action.payload;
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoding = false;
      state.error = "";
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.isLoding = false;
      state.error = "";
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoding = false;
      state.error = "";
    });

    // builder.addCase(getTodo.pending, (state, action) => {
    //   (state.isLoding = true), (state.error = "");
    // });
    // builder.addCase(getTodo.rejected, (state, action) => {
    //   (state.isLoding = false), (state.error = action.payload);
    // });

    builder.addMatcher(isRejected, (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    });

    builder.addMatcher(isPending, (state, action) => {
      state.isLoding = true;
      state.error = "";
    });
  },
});

export default todoApiSlice.reducer;
