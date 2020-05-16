import React from "react";
import SectionRouter from "../../routes/Router";
import { itemsRoutes } from "../../routes/routesGenerator";

const classes = {
  container: {
    padding: "8px"
  }
};

const Docs = () => {
  return (
    <div style={classes.container}>
      <SectionRouter routes={itemsRoutes("docs")} />
    </div>
  );
};

export default Docs;
