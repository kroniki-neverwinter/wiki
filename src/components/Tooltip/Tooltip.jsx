import React from "react";
import styles from "../CharacterForm/styles.module.css";

export const Tooltip = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <span className={styles.tooltipContainer}>
      <button type="button" className={styles.tooltipButton} aria-label="Help">
        ?
      </button>
      <span className={styles.tooltipText}>{children}</span>
    </span>
  );
}
