import React from "react";
import styles from "./Graph.module.css";
import Component from "../UI/Component";
import DraggableArea from "./DraggableArea";

const NODES = [
  { id: 0, x: 50, y: 0, neighbours: new Set().add(1) },
  { id: 1, x: 50, y: 0, neighbours: new Set().add(0) },
];

const Graph = (props) => {
  return (
    <Component title="Graph" className={styles.Graph}>
      <DraggableArea nodes={NODES} />
    </Component>
  );
};

export default Graph;
