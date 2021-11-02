import { createSlice } from "@reduxjs/toolkit";

export const eOptions = {
  DIR: 1,
  UNDIR: 0,
};

const initialGraphState = {
  nodes: [
    { id: 0, x: 50, y: 0 },
    { id: 1, x: 80, y: 0 },
    { id: 2, x: 100, y: 50 },
  ],
  edges: [
    { nodesBetween: [0, 1], edgeVariant: eOptions.UNDIR },
    { nodesBetween: [0, 2], edgeVariant: eOptions.UNDIR },
    { nodesBetween: [1, 2], edgeVariant: eOptions.UNDIR },
  ],
  nextId: 4,
};

const graphSlice = createSlice({
  name: "graph",
  initialState: initialGraphState,
  reducers: {
    addNode(state, action) {
      const newNode = action.payload;

      state.nodes.push({
        id: state.nextId,
        x: newNode.x,
        y: newNode.y,
      });
      state.nextId++;
    },
    removeNode(state, action) {
      const nodeId = action.payload;
      state.edges = state.edges.filter(
        (edge) =>
          edge.nodesBetween[0] !== nodeId && edge.nodesBetween[1] !== nodeId
      );
      state.nodes = state.nodes.filter((node) => node.id !== nodeId);
    },
    updateNodePosition(state, action) {
      const index = state.nodes.findIndex(
        (node) => node.id === action.payload.id
      );

      if (index >= 0) {
        state.nodes[index].x = action.payload.x;
        state.nodes[index].y = action.payload.y;
      }
    },
  },
});

export default graphSlice.reducer;

export const graphActions = graphSlice.actions;
