import React from "react";
import SectionRouter from "../../routes/Router";
import { itemsRoutes } from "../../routes/routesGenerator";

const Docs = () => {
  return <SectionRouter routes={itemsRoutes("docs")} />;
};

export default Docs;
