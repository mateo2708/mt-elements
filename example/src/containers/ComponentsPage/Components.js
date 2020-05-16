import React from "react";
import SectionRouter from "../../routes/Router";
import { itemsRoutes } from "../../routes/routesGenerator";

const classes = {
  container: {
    padding: "8px"
  }
};

const Components = () => {
  return (
    <div style={classes.container}>
      <SectionRouter routes={itemsRoutes("components")} />
    </div>
  );
};

export default Components;
