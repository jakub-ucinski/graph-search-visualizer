import { configureStore } from "@reduxjs/toolkit";

import nodeSliceReducer from "./node-slice";
import edgeSliceReducer from "./edge-slice";

const store = configureStore({
  reducer: {
    node: nodeSliceReducer,
    edge: edgeSliceReducer,
  },
});

export default store;
