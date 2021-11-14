import React from "react";
import styles from "./NodeOptions.module.css";
import NodeOption from "./NodeOption";
import { NODE_OPTIONS_ICONS } from "./NodeOptionsIcons";
import { useDispatch } from "react-redux";
import { nodeActions } from "../../../../store/node-slice";
import { edgeActions } from "../../../../store/edge-slice";

const NodeOptions = (props) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(nodeActions.removeNode(props.nodeId));
  };

  const addEdgeHandler = (e) => {
    dispatch(edgeActions.setEdgeCreatingFrom(props.nodeId));
    dispatch(
      edgeActions.setEdgeCreatingTo({
        x: e.nativeEvent.layerX,
        y: e.nativeEvent.layerY,
      })
    );

    e.stopPropagation();
  };

  const nodeOptions = [
    { icon: NODE_OPTIONS_ICONS.BIN, handler: removeHandler },
    { icon: NODE_OPTIONS_ICONS.ADD_EDGE, handler: addEdgeHandler },
  ].map((option, index) => (
    <NodeOption key={index} icon={option.icon} onClick={option.handler} />
  ));

  return (
    <div
      className={styles.NodeOptions}
      onMouseLeave={props.onMouseLeave}
      onMouseOver={props.onMouseOver}
    >
      {nodeOptions}
    </div>
  );
};

export default NodeOptions;
