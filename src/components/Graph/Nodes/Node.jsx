import React, { useRef } from "react";
import styles from "./Node.module.css";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { graphActions } from "../../../store/graph-slice";

const Node = (props) => {
  const nodeRef = useRef();
  const dispatch = useDispatch();

  const draggingStopHandler = (e, data) => {
    dispatch(
      graphActions.updateNodePosition({
        id: props.id,
        x: data.x,
        y: data.y,
      })
    );
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      onDrag={draggingStopHandler}
      onStop={draggingStopHandler}
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
