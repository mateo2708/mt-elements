import React from "react";
import SectionRouter from "../../routes/Router";
import { itemsRoutes } from "../../routes/routesGenerator";

// import CodeElement from "../../components/CodeElement/CodeElement";

const classes = {
  container: {
    padding: "8px"
  }
};

const GettingStarted = () => {
  return (
    <div style={classes.container}>
      <SectionRouter routes={itemsRoutes("getting-started")} />
    </div>
  );
};

export default GettingStarted;
