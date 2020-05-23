import React from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeSample from "../../components/CodeSample/CodeSample";
import Table from "../../components/Table/Table";

import { SelectInput } from "mt-elements";

const ModeDemo = props => {
  const { Option } = SelectInput;
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <SelectInput
        label="Select Input"
        placeholder="Select something"
        mode="single"
      >
        <Option value="1">Opción 1</Option>
        <Option value="2">Opción 2</Option>
        <Option value="3">Opción 3</Option>
      </SelectInput>
      <SelectInput
        label="Select Input"
        placeholder="Select something"
        mode="multiple"
      >
        <Option value="1">Opción 1</Option>
        <Option value="2">Opción 2</Option>
        <Option value="3">Opción 3</Option>
      </SelectInput>
    </div>
  );
};

const modeDemoCode = `
import React from "react";
import { SelectInput } from "mt-elements";

const ModeDemo = props => {
    const { Option } = SelectInput;
    return (
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <SelectInput
          label="Select Input"
          placeholder="Select something"
          mode="single"
        >
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
          <Option value="3">Opción 3</Option>
        </SelectInput>
        <SelectInput
          label="Select Input"
          placeholder="Select something"
          mode="multiple"
        >
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
          <Option value="3">Opción 3</Option>
        </SelectInput>
      </div>
    );
};
`;

const GetDataDemo = props => {
  const { Option } = SelectInput;

  const onChange = value => {
    console.log("onChange input:", value);
    return value;
  };

  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <SelectInput
        label="Select Input"
        placeholder="Select something"
        onChange={onChange}
      >
        <Option value="1">Opción 1</Option>
        <Option value="2">Opción 2</Option>
      </SelectInput>
    </div>
  );
};

const getDataDemoCode = `
import React, { useRef } from "react";
import { InputText } from "mt-elements";

const GetDataDemo = props => {
  const { Option } = SelectInput;

  const onChange = value => {
    console.log("onChange input:", value);
    return value;
  };

  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <SelectInput
        label="Select Input"
        placeholder="Select something"
        onChange={onChange}
      >
        <Option value="1">Opción 1</Option>
        <Option value="2">Opción 2</Option>
      </SelectInput>
    </div>
  );
};
`;

const propsTableData = {
  headers: ["property", "description", "type", "default"],
  data: [
    {
      property: "mode",
      description: "Defines the selection mode: [single, multiple]",
      type: "string",
      default: "single"
    },
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
      property: "onChange",
      description: "Callback function to get input value.",
      type: "function",
      default: ""
    }
  ]
};
const SelectInputPage = () => {
  return (
    <Content>
      <Section title="SelectInput">
        <p>Request an user input from a list of options.</p>
        <h2>When to use:</h2>
        <p>
          This component can be used to request an input from some specific
          options.
        </p>
        <p>You can use 2 modes of input:</p>
        <ul>
          <li>
            <strong>Single: </strong>
            Select a single option.
          </li>
          <li>
            <strong>Multiple: </strong>
            Select multiple options.
          </li>
        </ul>
        <p>
          The SelectInput component includes another child component called
          Option, you can use it to includes options as element children.
        </p>
      </Section>
      <Section>
        <h2>Examples:</h2>
        <CodeSample title="Mode" demo={<ModeDemo />} code={modeDemoCode}>
          You can use the SelectInput component either for single selection or
          with multiple selection.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample
          title="Getting data"
          demo={<GetDataDemo />}
          code={getDataDemoCode}
        >
          You can use a callback function passed to the component with the
          onChange property to get the selected data.
        </CodeSample>
      </Section>
      <Section>
        <h2>API:</h2>
        <Table data={propsTableData} />
      </Section>
    </Content>
  );
};

export default SelectInputPage;
