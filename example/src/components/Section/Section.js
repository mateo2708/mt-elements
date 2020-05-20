import React from "react";

import SectionStyles from "./SectionStyles";
import { withTheme, makeStyles } from "mt-elements";

const Section = props => {
  const useStyles = makeStyles(SectionStyles, props.theme);
  const classes = useStyles();
  return (
    <section className={classes.sectionContainer}>
      {props.title && <Title>{props.title}</Title>}
      <div className={classes.content}>{props.children}</div>
    </section>
  );
};

const Title = props => {
  const useStyles = makeStyles(SectionStyles, props.theme);
  const classes = useStyles();
  return (
    <div className={classes.titleContainer}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default withTheme(Section);
