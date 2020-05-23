import React, { useEffect, useState } from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeSample from "../../components/CodeSample/CodeSample";
import Table from "../../components/Table/Table";

import axios from "axios";

import { Autocomplete } from "mt-elements";

const DataDemo = props => {
  const { Option } = Autocomplete;

  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(response => {
      setState(
        response.data.results.reduce((array, item) => {
          return [...array, item.name];
        }, [])
      );
    });
  }, []);
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Autocomplete
        placeholder="Write something"
        label="External options"
        options={state}
      />
      <Autocomplete placeholder="Write something" label="Internal Options">
        <Option>Opción 1</Option>
        <Option>Opción 2</Option>
        <Option>Opción 3</Option>
        <Option>Opción 4</Option>
        <Option>Opción 5</Option>
        <Option>Opción 6</Option>
      </Autocomplete>
    </div>
  );
};

const dataDemoCode = `
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Autocomplete } from "mt-elements";

const DataDemo = props => {
  const { Option } = Autocomplete;

  const [state, setState] = useState([]);
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response => {
      setState(
        response.data.results.reduce((array, item) => {
          return [...array, item.name];
        }, [])
      );
    });
  }, []);
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Autocomplete
        placeholder="Write something"
        label="External options"
        options={state}
      />
      <Autocomplete placeholder="Write something" label="Internal Options">
        <Option>Opción 1</Option>
        <Option>Opción 2</Option>
        <Option>Opción 3</Option>
        <Option>Opción 4</Option>
        <Option>Opción 5</Option>
        <Option>Opción 6</Option>
      </Autocomplete>
    </div>
  );
};
`;

const MaxDemo = props => {
  const { Option } = Autocomplete;

  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(response => {
      setState(
        response.data.results.reduce((array, item) => {
          return [...array, item.name];
        }, [])
      );
    });
  }, []);
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Autocomplete
        placeholder="Write something"
        label="External options"
        options={state}
        maxOptions={3}
      />
      <Autocomplete
        placeholder="Write something"
        label="Internal Options"
        maxOptions={3}
      >
        <Option>Opción 1</Option>
        <Option>Opción 2</Option>
        <Option>Opción 3</Option>
        <Option>Opción 4</Option>
        <Option>Opción 5</Option>
        <Option>Opción 6</Option>
      </Autocomplete>
    </div>
  );
};

const maxDemoCode = `
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Autocomplete } from "mt-elements";

const DataDemo = props => {
  const { Option } = Autocomplete;

  const [state, setState] = useState([]);
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response => {
      setState(
        response.data.results.reduce((array, item) => {
          return [...array, item.name];
        }, [])
      );
    });
  }, []);
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      <Autocomplete
        placeholder="Write something"
        label="External options"
        options={state}
        maxOptions={3}
      />
      <Autocomplete
        placeholder="Write something"
        label="Internal Options"
        maxOptions={3}
      >
        <Option>Opción 1</Option>
        <Option>Opción 2</Option>
        <Option>Opción 3</Option>
        <Option>Opción 4</Option>
        <Option>Opción 5</Option>
        <Option>Opción 6</Option>
      </Autocomplete>
    </div>
  );
};
`;

const propsTableData = {
  headers: ["property", "description", "type", "default"],
  data: [
    {
      property: "options",
      description: "Set an array of options to display.",
      type: "array",
      default: "[]"
    },
    {
      property: "maxOptions",
      description:
        "Defines the maximun number of options to display in the suggestions box.",
      type: "number",
      default: ""
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

const AutocompletePage = () => {
  return (
    <Content>
      <Section title="Autocomplete">
        <p>
          Request an user text input, using a list of element as hints to
          autocomplete.
        </p>
        <h2>When to use:</h2>
        <p>
          This component can be used to request any a text input from a long set
          of data.
        </p>
      </Section>
      <Section>
        <h2>Examples:</h2>
        <CodeSample title="Data source" demo={<DataDemo />} code={dataDemoCode}>
          With the MT-Elements Autocomplete component you can chose from two
          different sources for the data, you can use an array passed by de
          options property, or you can write Options components as children to
          be used as data.
        </CodeSample>
      </Section>
      <Section>
        <CodeSample
          title="Maximun options"
          demo={<MaxDemo />}
          code={maxDemoCode}
        >
          With the maxOptions property you can define how many options to show
          in the suggestions box.
        </CodeSample>
      </Section>
      <Section>
        <h2>API:</h2>
        <Table data={propsTableData} />
      </Section>
    </Content>
  );
};

export default AutocompletePage;
