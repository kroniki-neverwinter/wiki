import React from "react";
import Tooltip from "./Tooltip";
import styles from "./styles.module.css";

export default function FormField({ id, label, tooltip, children }) {
  return (
    <div className={styles.formField}>
      <label htmlFor={id}>
        {label}
        <Tooltip>{tooltip}</Tooltip>
      </label>
      {children}
    </div>
  );
}
