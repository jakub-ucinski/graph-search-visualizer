import React from "react";
import Edge from "./Edge";
import EdgeCreating from "./EdgeCreating";
import styles from "./Edges.module.css";
import { useSelector } from "react-redux";

const Edges = (props) => {
  const edges = useSelector((state) => state.edge.edges);
  const edgeCreatingFrom = useSelector((state) => state.edge.edgeCreatingFrom);

  const edgeComponents = edges.map((edge) => (
    <Edge
      key={`${edge.nodesBetween[0]}${edge.nodesBetween[1]}`}
      node0Id={edge.nodesBetween[0]}
      node1Id={edge.nodesBetween[1]}
      dir={edge.edgeVariant}
      color="#2b303a"
    />
  ));

  const edgeCreating = edgeCreatingFrom && (
    <EdgeCreating nodeFromId={edgeCreatingFrom} color="#2b303a" />
  );
  return (
    <svg
      className={styles.Edges}
      viewBox={`0 0 ${props.canvasSize.width} ${props.canvasSize.height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {edgeComponents}
      {edgeCreating}
    </svg>
  );
};

export default Edges;
