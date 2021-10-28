import React, { useState } from "react";
import styles from "./DraggableArea.module.css";

import Node from "./Node";

const DraggableArea = (props) => {
  const nodes = props.nodes.map((node) => (
    <Node key={node.id} posX={node.x} posY={node.y} />
  ));

  return <div className={styles.DraggableArea}>{nodes}</div>;
};

export default DraggableArea;
