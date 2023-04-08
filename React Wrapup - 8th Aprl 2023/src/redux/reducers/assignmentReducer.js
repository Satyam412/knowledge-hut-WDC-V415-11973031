import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAssignments = createAsyncThunk(
  "assignments/getAssignments",
  async () => {
    let tempData;
    const response = await fetch(
      "https://crudcrud.com/api/ba654406bf5f40b8b8cfda44dd68bade/submissions"
    )
      .then((res) => res.json())
      .then((data) => {
        tempData = data;
      });
    return tempData;
  }
);

export const assignmentSlice = createSlice({
  name: "assignments",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAssignments.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getAssignments.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getAssignments.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Something went wrong!";
      }
    });
  },
});

export default assignmentSlice.reducer;
