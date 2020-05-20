import React from "react";

import Contentstyles from "./ContentStyles";
import { withTheme, makeStyles } from "mt-elements";

const Content = props => {
  const useStyles = makeStyles(Contentstyles, props.theme);
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
};

export default withTheme(Content);
