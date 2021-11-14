import { createSlice } from "@reduxjs/toolkit";

export const eOptions = {
  DIR: 1,
  UNDIR: 0,
};

const initialEdgeState = {
  edges: [
    { id: 0, nodesBetween: [0, 1], edgeVariant: eOptions.UNDIR },
    { id: 1, nodesBetween: [0, 2], edgeVariant: eOptions.UNDIR },
    { id: 2, nodesBetween: [1, 2], edgeVariant: eOptions.UNDIR },
    // { nodesBetween: [1, 2], edgeVariant: eOptions.CREATE },
  ],
  edgeCreatingFrom: null,
  edgeCreatingTo: { x: null, y: null },
  nextId: 3,
};

const edgeSlice = createSlice({
  name: "edge",
  initialState: initialEdgeState,
  reducers: {
    addEdge(state, action) {
      const { nodesBetween, edgeVariant } = action.payload;
      // check if the nodes exist
      state.edges.push({
        id: state.nextId,
        nodesBetween,
        edgeVariant,
      });
      state.nextId++;
    },

    setEdgeCreatingFrom(state, action) {
      const id = action.payload;
      // check if the nodes exist
      state.edgeCreatingTo.x = null;
      state.edgeCreatingTo.y = null;
      state.edgeCreatingFrom = id;
    },

    setEdgeCreatingTo(state, action) {
      const { x, y } = action.payload;

      state.edgeCreatingTo.x = x;
      state.edgeCreatingTo.y = y;
    },

    removeEdgesConnectedToNode(state, action) {
      const nodeId = action.payload;

      state.edges = state.edges.filter(
        (edge) =>
          edge.nodesBetween[0] !== nodeId && edge.nodesBetween[1] !== nodeId
      );
    },
  },
});

export default edgeSlice.reducer;

export const edgeActions = edgeSlice.actions;
