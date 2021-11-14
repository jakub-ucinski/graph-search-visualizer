import React from "react";
import style from "./NodeOption.module.css";

const NodeOption = (props) => {
  const clickHandler = (e) => {
    props.onClick(e);
  };

  return (
    <button className={style.NodeOption} onClick={clickHandler}>
      {props.icon}
    </button>
  );
};

export default NodeOption;
