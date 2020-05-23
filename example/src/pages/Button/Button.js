import React from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeSample from "../../components/CodeSample/CodeSample";
import Table from "../../components/Table/Table";

import { Button } from "mt-elements";

const TypeDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </div>
  );
};

const typeDemoCode = `
import { Button } from "mt-elements";

const TypeDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </div>
  );
};
`;

const ShapeDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Button shape="round">Large</Button>
      <Button disabled>Medium</Button>
    </div>
  );
};

const shapeDemoCode = `
  import { Button } from "mt-elements";
  
  const ShapeDemo = props => {
    return (
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <Button shape="round">Large</Button>
        <Button disabled>Medium</Button>
      </div>
    );
  };
`;

const SizeDemo = props => {
  return (
    <div style={{ display: "flex" }}>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </div>
  );
};

const sizeDemoCode = `
    import { Button } from "mt-elements";
    
    const SizeDemo = props => {
      return (
        <div style={{ display: "flex" }}>
          <Button size="large">Large</Button>
          <Button size="medium">Medium</Button>
          <Button size="small">Small</Button>
        </div>
      );
    };
  `;

const propsTableData = {
  headers: ["property", "description", "type", "default"],
  data: [
    {
      property: "type",
      description:
        "Defines the type of button [primary, secondary, dashed, link]",
      type: "string",
      default: "primary"
    },
    {
      property: "size",
      description: "Defines the size of the button: [large, medium, small]",
      type: "string",
      default: "medium"
    },
    {
      property: "shape",
      description: "Defines the shape of the button: [round, rect]",
      type: "string",
      default: "rect"
    },
    {
      property: "disabled",
      description: "Defines if the button is disabled",
      type: "boolean",
      default: "false"
    },
    {
      property: "onClick",
      description: "Callback function on click event",
      type: "function",
      default: ""
    }
  ]
};

const ButtonPage = () => {
  return (
    <Content>
      <Section title="Button">
        <p>The Button component allows you to trigger an action.</p>
        <h2>When to use:</h2>
        <p>Execute one or multiple operations by clicking the element.</p>
        <p>You can use 4 different types of button:</p>
        <ul>
          <li>
            <strong>Primary:</strong> Uses the main color of the theme as
            background.
          </li>
          <li>
            <strong>Secondary:</strong> Uses the secondary color of the theme as
            background.
          </li>
          <li>
            <strong>Dashed:</strong> Transparent button with dashed border.
          </li>
          <li>
            <strong>Link:</strong> Link button without box.
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Examples:</h2>
        <CodeSample title="Type" demo={<TypeDemo />} code={typeDemoCode}>
          The MT-Elements button component gives you 4 different type presets.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample title="Size" demo={<SizeDemo />} code={sizeDemoCode}>
          You can use 3 differentes sizes of button. The size prop changes de
          height of the button.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample
          title="Shape and disabled"
          demo={<ShapeDemo />}
          code={shapeDemoCode}
        >
          You can set a round shape to the button and you can set a disabled
          prop to disable the button.
        </CodeSample>
      </Section>
      <Section>
        <h2>API:</h2>
        <Table data={propsTableData} />
      </Section>
    </Content>
  );
};

export default ButtonPage;
