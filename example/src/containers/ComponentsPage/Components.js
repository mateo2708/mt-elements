import React from "react";
import SectionRouter from "../../routes/Router";
import { itemsRoutes } from "../../routes/routesGenerator";

const Components = () => {
  return <SectionRouter routes={itemsRoutes("components")} />;
};

export default Components;
