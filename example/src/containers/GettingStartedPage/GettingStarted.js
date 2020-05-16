import React from "react";
import SectionRouter from "../../routes/Router";
import { itemsRoutes } from "../../routes/routesGenerator";

import CodeElement from "../../components/CodeElement/CodeElement";

const classes = {
  container: {
    padding: "8px"
  }
};

const code = `
<Autocomplete
  placeholder="Escribite"
  label="Autocomplete"
  options={state}
/>
<Autocomplete
  placeholder="Escribite"
  label="Autocomplete"
  maxOptions="5"
>
  <Option>Opción 1</Option>
  <Option>Opción 2</Option>
  <Option>Opción 3</Option>
  <Option>Opción 4</Option>
  <Option>Opción 5</Option>
  <Option>Opción 6</Option>
</Autocomplete>
`;

const GettingStarted = () => {
  return (
    <div style={classes.container}>
      <CodeElement
        code={code}
        language="jsx"
        style={{ width: "50rem", height: "10rem" }}
      />
      <SectionRouter routes={itemsRoutes("getting-started")} />
    </div>
  );
};

export default GettingStarted;
