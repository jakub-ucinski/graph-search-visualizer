import React from "react";
import { useSelector } from "react-redux";
import Node from "./Node";

const Nodes = () => {
  const nodes = useSelector((state) => state.graph.nodes);

  const nodeComponents = nodes.map((node) => (
    <Node key={node.id} posX={node.x} posY={node.y} id={node.id} />
  ));

  return <>{nodeComponents}</>;
};

export default Nodes;
