import React, { useState, useRef } from "react";
import styles from "./Node.module.css";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { graphActions } from "../../store/graph-slice";

const Node = (props) => {
  const nodeRef = useRef();
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.graph.nodes);

  const stopEventHandler = (e, data) => {
    dispatch(
      graphActions.updateNodePosition({
        id: props.id,
        x: data.x,
        y: data.y,
      })
    );
  };

  const draggingHandler = (e, data) => {
    dispatch(
      graphActions.updateNodePosition({
        id: props.id,
        x: data.x,
        y: data.y,
      })
    );
  };

  console.log(nodes);
  return (
    <Draggable
      nodeRef={nodeRef}
      onDrag={draggingHandler}
      onStop={stopEventHandler}
      position={{ x: props.posX, y: props.posY }}
      bounds="parent"
      defaultPosition={{ x: props.posX, y: props.posY }}
    >
      <div ref={nodeRef} className={styles.nodeWrapper}>
        <div className={styles.node} />
      </div>
    </Draggable>
  );
};

export default Node;
