import React, { useRef, useState } from "react";
import styles from "./Node.module.css";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { nodeActions } from "../../../store/node-slice";
import { edgeActions } from "../../../store/edge-slice";
import { eOptions } from "../../../store/edge-slice";

import NodeOptions from "./NodeOptions/NodeOptions";

const Node = (props) => {
  const nodeRef = useRef();
  const dispatch = useDispatch();

  const [areNodeOptionOpen, updateAreNodeOptionOpen] = useState(false);
  const [isDragging, updateIsDragging] = useState(false);

  const edgeCreatingFrom = useSelector((state) => state.edge.edgeCreatingFrom);

  const edges = useSelector((state) => state.edge.edges);
  let existingEdge = null;
  const draggingStopHandler = (e, data) => {
    updateIsDragging(false);
    dispatch(
      nodeActions.updateNodePosition({
        id: props.id,
        x: data.x,
        y: data.y,
      })
    );
  };

  const draggingHandler = (e, data) => {
    updateIsDragging(true);
    dispatch(
      nodeActions.updateNodePosition({
        id: props.id,
        x: data.x,
        y: data.y,
      })
    );
  };

  const clickHandler = (e, data) => {
    if (edgeCreatingFrom) {
      dispatch(
        edgeActions.setEdgeCreatingFrom(null)
      );
      existingEdge = edges.find(
        (edge) =>
          edge.nodesBetween[0] === edgeCreatingFrom &&
          edge.nodesBetween[1] === props.id
      );
      if (!existingEdge) {
        // updateIsDragging(true);
        dispatch(
          edgeActions.addEdge({
            nodesBetween: [edgeCreatingFrom, props.id],
            edgeVariant: eOptions.UNDIR,
          })
        );
      }
    }
  };

  let timeout;

  const mouseOverHandler = () => {
    timeout && clearTimeout(timeout);
    updateAreNodeOptionOpen(true);
  };

  const mouseLeaveHandler = () => {
    if (!isDragging) {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateAreNodeOptionOpen(false);
      }, 200);
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      onStart={clickHandler}
      onDrag={draggingHandler}
      onStop={draggingStopHandler}
      position={{ x: props.posX, y: props.posY }}
      bounds="parent"
      defaultPosition={{ x: props.posX, y: props.posY }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        ref={nodeRef}
        className={styles.nodeWrapper}
      >
        {areNodeOptionOpen && (
          <NodeOptions
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            nodeId={props.id}
          />
        )}
        <div
          className={styles.node}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
        />
      </div>
    </Draggable>
  );
};

export default Node;
