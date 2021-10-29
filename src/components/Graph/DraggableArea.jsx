import React, { useState } from "react";
import styles from "./DraggableArea.module.css";
import Edges from "./Edges";
import Nodes from "./Nodes";

const DraggableArea = (props) => {
  const [size, updateSize] = useState({ width: 500, height: 500 });
  return (
    <div
      className={styles.DraggableArea}
      style={{ width: size.width, height: size.width }}
    >
      <Edges canvasSize={size} />
      <Nodes />
    </div>
  );
};

export default DraggableArea;
