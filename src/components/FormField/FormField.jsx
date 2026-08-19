import React from "react";
import { Tooltip } from "../Tooltip";
import styles from "../CharacterForm/styles.module.css";

export const FormField = ({ id, label, tooltip, children }) => {
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
