import React from "react";
import styles from "./styles.module.css";
export { default as Input } from "./components/Input";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};
