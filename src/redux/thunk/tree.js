import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTreeData, createTreeNodeData } from "../../shared/api";

export const getTree = createAsyncThunk(
  "tree/get",
  async (treeName, fetchAPI) => {
    try {
      return await getTreeData(treeName);
    } catch (e) {
      return fetchAPI.rejectWithValue(e.message);
    }
  }
);
