import { createSlice } from "@reduxjs/toolkit";

export const eOptions = {
  DIR: 1,
  UNDIR: 0,
};

const initialGraphState = {
  nodes: [
    { id: 0, x: 50, y: 0 },
    { id: 1, x: 80, y: 0 },
  ],
  edges: [[0, 1, eOptions.UNDIR]],
};

const graphSlice = createSlice({
  name: "graph",
  initialState: initialGraphState,
  reducers: {
    addNode(state, action) {
      const newNode = action.payload;

      state.nodes.push({
        id: newNode.id,
        x: newNode.title,
        y: newNode.price,
      });
    },
    removeNode(state, action) {
      const nodeId = action.payload;
      state.nodes = state.nodes.filter((node) => node.id === nodeId);
    },
    updateNodePosition(state, action) {
      const index = state.nodes.findIndex(
        (node) => node.id === action.payload.id
      );

      if (index >= 0) {
        state.nodes[index].x = action.payload.x;
        state.nodes[index].y = action.payload.y;
      }

      //   console.log(state.nodes[index].x);
    },
  },
});

export default graphSlice.reducer;

export const graphActions = graphSlice.actions;
