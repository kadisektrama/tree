import treeSlice from "./slices/tree.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tree: treeSlice,
  },
});
