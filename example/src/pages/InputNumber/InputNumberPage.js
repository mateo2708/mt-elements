import React, { useRef } from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeSample from "../../components/CodeSample/CodeSample";
import Table from "../../components/Table/Table";

import { InputNumber } from "mt-elements";

const MinMaxDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputNumber label="1 to 10" max={10} min={1} step={1} />
      <InputNumber label="10 to 100" max={100} min={10} step={10} />
    </div>
  );
};

const minMaxDemoCode = `
import React from "react";
import { InputNumber } from "mt-elements";

const MinMaxDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputNumber label="1 to 10" max={10} min={1} step={1} />
      <InputNumber label="10 to 100" max={100} min={10} step={10} />
    </div>
  );
};
`;

const FormatDemo = props => {
  const formatData = value => {
    return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputNumber label="Currency format" formatter={formatData} />
    </div>
  );
};

const expresion = "`$ ${value}`";

const regEX = String.raw`${expresion}.replace(/\B(?=(\d{3})+(?!\d))/g, ",")`;
const formatDemoCode = `
import React from "react";
import { InputNumber } from "mt-elements";

const FormatDemo = props => {
  const formatData = value => {
    return ${regEX};
  };

  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputNumber label="Currency format" formatter={formatData} />
    </div>
  );
};
`;

const GetDataDemo = props => {
  const inputRef = useRef();

  const onChange = value => {
    console.log("Reference input:", inputRef.current.value);
    console.log("onChange input:", value);
    return value;
  };

  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputNumber label="onChange Input" onChange={onChange} />
      <InputNumber label="Reference Input" inputRef={inputRef} />
    </div>
  );
};

const getDataDemoCode = `
import React, { useRef } from "react";
import { InputText } from "mt-elements";

const GetDataDemo = props => {
  const inputRef = useRef();

  const onChange = value => {
    console.log("Reference input:", inputRef.current.value);
    console.log("onChange input:", value);
    return value;
  };

  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputNumber label="onChange Input" onChange={onChange} />
      <InputNumber label="Reference Input" inputRef={inputRef} />
    </div>
  );
};
`;

const propsTableData = {
  headers: ["property", "description", "type", "default"],
  data: [
    {
      property: "label",
      description: "Defines the label for the input.",
      type: "string",
      default: ""
    },
    {
      property: "size",
      description: "Defines the size of the input: [large, medium, small]",
      type: "string",
      default: "medium"
    },
    {
      property: "shape",
      description: "Defines the shape of the input: [round, rect]",
      type: "string",
      default: "rect"
    },
    {
      property: "disabled",
      description: "Defines if the input is disabled",
      type: "boolean",
      default: "false"
    },
    {
      property: "alertMode",
      description: "Defines the type of alert [success, warning, error].",
      type: "string",
      default: ""
    },
    {
      property: "alertMessage",
      description: "Defines the message of the alert.",
      type: "string",
      default: ""
    },
    {
      property: "min",
      description: "Defines a minimun value.",
      type: "number",
      default: ""
    },
    {
      property: "max",
      description: "Defines a maximun value.",
      type: "number",
      default: ""
    },
    {
      property: "step",
      description: "Defines the step for the counter control.",
      type: "number",
      default: "1"
    },
    {
      property: "formatter",
      description: "Function to format the input value.",
      type: "function",
      default: ""
    },
    {
      property: "inputRef",
      description: "Set the a reference to the input element.",
      type: "ref",
      default: ""
    },
    {
      property: "onChange",
      description: "Callback function to get input value.",
      type: "function",
      default: ""
    }
  ]
};

const InputNumberPage = () => {
  return (
    <Content>
      <Section title="InputNumber">
        <p>Request an user numeric input.</p>
        <h2>When to use:</h2>
        <p>This component can be used to request a numeric input.</p>
      </Section>
      <Section>
        <h2>Examples:</h2>
        <CodeSample
          title="Limits and steps"
          demo={<MinMaxDemo />}
          code={minMaxDemoCode}
        >
          You can set a maximun and minimun limits to the input number using the
          max and min properties. You can also set and step to be used by the
          counter controls.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample
          title="Formating input data"
          demo={<FormatDemo />}
          code={formatDemoCode}
        >
          The InputNumber components allows you to give your own format to the
          input by passing a formatter function to the formatter property.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample
          title="Getting data"
          demo={<GetDataDemo />}
          code={getDataDemoCode}
        >
          There are two ways to get data from the InputNumber component, you can
          use a callback function passed to the component with the onChange
          property, or you can create a reference that can be assigned using the
          inputRef property.
        </CodeSample>
      </Section>
      <Section>
        <h2>API:</h2>
        <Table data={propsTableData} />
      </Section>
    </Content>
  );
};

export default InputNumberPage;
