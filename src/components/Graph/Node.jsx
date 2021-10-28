import React, { useState, useRef } from "react";
import styles from "./Node.module.css";
import Draggable from "react-draggable";
const Node = (props) => {

  const [position, updatePosition] = useState({
    x: props.posX,
    y: props.posY,
  });

  const nodeRef = useRef();

  const stopEventHandler = (e, data) => {
    updatePosition({ x: data.x, y: data.y });
  };

  const draggingHandler = (e, data) => {
    updatePosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      onDrag={draggingHandler}
      onStop={stopEventHandler}
      position={position}
      bounds="parent"
    >
      <div ref={nodeRef} className={styles.node} />
    </Draggable>
  );
};

export default Node;
