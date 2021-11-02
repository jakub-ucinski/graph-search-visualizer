import React, { useState } from "react";
import styles from "./DraggableArea.module.css";
import Edges from "./Edges/Edges";
import Nodes from "./Nodes/Nodes";

import { useDispatch } from "react-redux";
import { graphActions } from "../../store/graph-slice";

const DraggableArea = (props) => {
  const [size] = useState({ width: 500, height: 500 });

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(
      graphActions.addNode({
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
    >
      <Edges canvasSize={size} />
      <Nodes />
    </div>
  );
};

export default DraggableArea;
