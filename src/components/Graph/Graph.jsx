import React from "react";
import styles from "./Graph.module.css";
import Component from "../UI/Component";
import DraggableArea from "./DraggableArea";

// const edgeOptions = {
//   UNDIR: 0,
//   DIR: 1,
// };
// const NODES = [

// ];

// const EDGES = [(0, 1, edgeOptions.UNDIR)];

const Graph = () => {
  return (
    <Component title="Graph" className={styles.Graph}>
      <DraggableArea />
    </Component>
  );
};

export default Graph;
