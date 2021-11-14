import { createSlice } from "@reduxjs/toolkit";
import { edgeActions } from "./edge-slice";

const initialNodeState = {
  nodes: [
    { id: 0, x: 50, y: 0 },
    { id: 1, x: 80, y: 0 },
    { id: 2, x: 100, y: 50 },
  ],
  nextId: 3,
};

const nodeSlice = createSlice({
  name: "node",
  initialState: initialNodeState,
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

      edgeActions.removeEdgesConnectedToNode(nodeId);

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

export default nodeSlice.reducer;

export const nodeActions = nodeSlice.actions;
