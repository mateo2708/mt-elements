import React from "react";

import CodeSampleStyles from "./CodeSampleStyles";
import { withTheme, makeStyles } from "mt-elements";

import CodeElement from "../CodeElement/CodeElement";

const CodeSample = props => {
  const useStyles = makeStyles(CodeSampleStyles, props.theme);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
        <div className={classes.info}>
          <div className={classes.title}>
            <h3>{props.title}</h3>
          </div>
          <div className={classes.description}>
            <p>{props.children}</p>
          </div>
        </div>
        <div className={classes.demo}>{props.demo}</div>
      </div>
      <div className={classes.rightBox}>
        <CodeElement language="jsx" code={props.code} />
      </div>
    </div>
  );
};

export default withTheme(CodeSample);
