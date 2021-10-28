import React from "react";
import styles from "./Component.module.css";

const Component = (props) => {
  return (
    <div className={`${styles.Component} ${props.className}`}>
      <h2 className={styles.title}>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Component;
