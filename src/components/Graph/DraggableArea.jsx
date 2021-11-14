import React, { useState } from "react";
import styles from "./DraggableArea.module.css";
import Edges from "./Edges/Edges";
import Nodes from "./Nodes/Nodes";

import { useDispatch, useSelector } from "react-redux";
import { nodeActions } from "../../store/node-slice";
import { edgeActions } from "../../store/edge-slice";

const DraggableArea = (props) => {
  const [size] = useState({ width: 500, height: 500 });
  const edgeCreatingFrom = useSelector((state) => state.edge.edgeCreatingFrom);

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(
      nodeActions.addNode({
        x: e.nativeEvent.layerX,
        y: e.nativeEvent.layerY,
      })
    );
  };

  const hoverHandler = (e) => {
    dispatch(
      edgeActions.setEdgeCreatingTo({
        x: e.nativeEvent.layerX,
        y: e.nativeEvent.layerY,
      })
    );
  };

  return (
    <div
      className={styles.DraggableArea}
      style={{ width: size.width, height: size.width }}
      onClick={clickHandler}
      onMouseMove={edgeCreatingFrom && hoverHandler}
    >
      <Edges canvasSize={size} />
      <Nodes />
    </div>
  );
};

export default DraggableArea;
