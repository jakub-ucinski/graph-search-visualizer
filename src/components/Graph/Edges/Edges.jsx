import React from "react";
import Edge from "./Edge";
import styles from "./Edges.module.css";
import { useSelector } from "react-redux";

const Edges = (props) => {
  const edges = useSelector((state) => state.graph.edges);
  const edgeComponents = edges.map((edge) => (
    <Edge
      key={`${edge[0]}${edge[1]}`}
      node0Id={edge[0]}
      node1Id={edge[1]}
      dir={edge[2]}
      color="#2b303a"
    />
  ));
  return (
    <svg
      className={styles.Edges}
      viewBox={`0 0 ${props.canvasSize.width} ${props.canvasSize.height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {edgeComponents}
    </svg>
  );
};

export default Edges;
