import { configureStore } from "@reduxjs/toolkit";

import graphSliceReducer from "./graph-slice";

const store = configureStore({
  reducer: {
    graph: graphSliceReducer,
  },
});

export default store;
