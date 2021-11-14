import React from "react";
import { useSelector } from "react-redux";

const EdgeCreating = (props) => {
  const nodes = useSelector((state) => state.node.nodes);
  const nodeFrom = nodes.find((node) => node.id === props.nodeFromId);
  const coordsTo = useSelector((state) => state.edge.edgeCreatingTo);

  if (!nodeFrom) {
    return <></>;
  }

  return (
    <line
      x1={nodeFrom.x}
      y1={nodeFrom.y}
      x2={coordsTo.x}
      y2={coordsTo.y}
      stroke={props.color}
      strokeWidth="2"
    />
  );
};

export default EdgeCreating;
