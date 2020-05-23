import React, { useRef } from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeSample from "../../components/CodeSample/CodeSample";
import Table from "../../components/Table/Table";

import { InputText } from "mt-elements";

const TypeDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputText label="Text Input" type="text" />
      <InputText label="Email Input" type="email" />
      <InputText label="Password Input" type="password" />
    </div>
  );
};

const typeDemoCode = `
import React from "react";
import { InputText } from "mt-elements";

const TypeDemo = props => {
    return (
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <InputText type="text" />
        <InputText type="email" />
        <InputText type="password" />
      </div>
    );
  };
`;

const SizeDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputText label="Text Input" size="large" />
      <InputText label="Email Input" size="medium" />
      <InputText label="Password Input" size="small" />
    </div>
  );
};

const sizeDemoCode = `
import React from "react";
import { InputText } from "mt-elements";

const SizeDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputText label="Text Input" size="large" />
      <InputText label="Email Input" size="medium" />
      <InputText label="Password Input" size="small" />
    </div>
  );
};
`;

const AlertDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputText
        label="Text Input"
        alertMode="success"
        alertMessage="Success Alert"
      />
      <InputText
        label="Email Input"
        alertMode="warning"
        alertMessage="Warning Alert"
      />
      <InputText
        label="Password Input"
        alertMode="error"
        alertMessage="Error Alert"
      />
    </div>
  );
};

const alertDemoCode = `
import React from "react";
import { InputText } from "mt-elements";

const AlertDemo = props => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <InputText
        label="Text Input"
        alertMode="success"
        alertMessage="Success Alert"
      />
      <InputText
        label="Email Input"
        alertMode="warning"
        alertMessage="Warning Alert"
      />
      <InputText
        label="Password Input"
        alertMode="error"
        alertMessage="Error Alert"
      />
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
      <InputText label="onChange Input" onChange={onChange} />
      <InputText label="Reference Input" inputRef={inputRef} />
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
      <InputText label="onChange Input" onChange={onChange} />
      <InputText label="Reference Input" inputRef={inputRef} />
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
      property: "type",
      description: "Defines the type of input [text, email, password]",
      type: "string",
      default: "text"
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

const InputTextPage = () => {
  return (
    <Content>
      <Section title="InputText">
        <p>Request an user text input.</p>
        <h2>When to use:</h2>
        <p>This component can be used to request any kind of text input.</p>
        <p>You can use 3 types of input:</p>
        <ul>
          <li>
            <strong>Text: </strong>
            Common text input.
          </li>
          <li>
            <strong>Email: </strong>
            Set the input type as email so it can be identified by browsers.
          </li>
          <li>
            <strong>Password: </strong>Set the input type as password so the
            input is hidden and it can be identified by browsers.
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Examples:</h2>
        <CodeSample title="Type" demo={<TypeDemo />} code={typeDemoCode}>
          The MT-Elements input text component gives you 3 different type
          presets.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample title="Size" demo={<SizeDemo />} code={sizeDemoCode}>
          You can use 3 differentes sizes of input. The size prop changes de
          height of the input.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample
          title="Alert message"
          demo={<AlertDemo />}
          code={alertDemoCode}
        >
          You can use 3 differentes sizes of input. The size prop changes de
          height of the input.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample
          title="Getting data"
          demo={<GetDataDemo />}
          code={getDataDemoCode}
        >
          There are two ways to get data from the InputText component, you can
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

export default InputTextPage;
