import React from "react";
import styles from "./NodeOptions.module.css";
import NodeOption from "./NodeOption";
import { NODE_OPTIONS_ICONS } from "./NodeOptionsIcons";
import { useDispatch } from "react-redux";
import { graphActions } from "../../../../store/graph-slice";

const NodeOptions = (props) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(graphActions.removeNode(props.nodeId));
  };
  const nodeOptions = [
    { icon: NODE_OPTIONS_ICONS.BIN, handler: removeHandler },
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
