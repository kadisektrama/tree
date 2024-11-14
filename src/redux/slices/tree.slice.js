import { createSlice } from "@reduxjs/toolkit";
import { getTree } from "../thunk/tree";

const initialState = { data: [] };

const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    setTree(state) {
      state.data = state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTree.fulfilled, (state, action) => {
      state.data = [action.payload];
    });
  },
});

export const { setTree } = treeSlice.actions;
export default treeSlice.reducer;
