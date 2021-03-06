import React from "react";
import { useSelector } from "react-redux";

const Edge = (props) => {
  const nodes = useSelector((state) => state.node.nodes);
  const node0 = nodes.find((node) => node.id === props.node0Id);
  const node1 = nodes.find((node) => node.id === props.node1Id);

  if (!node0 || !node1) {
    return <></>;
  }

  return (
    <line
      x1={node0.x}
      y1={node0.y}
      x2={node1.x}
      y2={node1.y}
      stroke={props.color}
      strokeWidth="2"
    />
  );
};

export default Edge;
