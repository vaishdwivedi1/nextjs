import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllBlogs = createAsyncThunk(
  "getAllBlogs",
  async (payload = {}, thunkAPI) => {
    const apiUrl = "http://localhost:3000/api/blog";

    try {
      const response = await axios.get(apiUrl);
      const { ok, problem, data } = response;
      if (data) {
        if (payload.callback) payload.callback();
        return data;
      } else {
        return thunkAPI.rejectWithValue({ data, problem });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleBlog = createAsyncThunk(
  'getSingleBlog',
  async (payload = {}, thunkAPI) => {
    const apiUrl = `http://localhost:3000/api/blog/${payload.payload}`;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        const { data } = response;
        if (data) {
          if (payload.callback) payload.callback();
          return data;
        } else {
          return thunkAPI.rejectWithValue({ data, problem: 'No data returned' });
        }
      } else {
        return thunkAPI.rejectWithValue({ data: response.data, status: response.status });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch');
    }
  }
);



export const addBlog = createAsyncThunk(
  "addBlog",
  async (payload = {}, thunkAPI) => {
    const apiUrl = "http://localhost:3000/api/blog";

    try {
      const response = await axios.post(apiUrl, payload.payload);
      const { ok, problem, data } = response;
      if (data) {
        if (payload.callback) payload.callback();
        return data;
      } else {
        return thunkAPI.rejectWithValue({ data, problem });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  blogs: [],
  blog: {},
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getAllBlogs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(addBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.loading = false;
      toast.success("Blog uploaded");
    });
    builder.addCase(addBlog.rejected, (state, action) => {
      state.loading = false;
      toast.error("Blog failed uploade");
      state.error = true;
    });
    builder.addCase(getSingleBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSingleBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload.result;
    });
    builder.addCase(getSingleBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {} = blogSlice.actions;
const blog = blogSlice.reducer;

export default blog;
