import React from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeSample from "../../components/CodeSample/CodeSample";

import { Button } from "mt-elements";

const DemoButton = props => {
  return (
    <div style={{ display: "flex" }}>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
    </div>
  );
};

const DemoButtonCode = `
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "mt-elements";

const DemoButton = props => {
  return (
    <div style={{ display: "flex" }}>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
    </div>
  );
};

ReactDOM.render(<DemoButton/>,document.getElementById("root"));
`;

const Usage = () => {
  return (
    <Content>
      <Section title="Quick start">
        <p>
          This is a little example of how to use a simple Button component from
          MT-Elements.
        </p>
        <CodeSample
          title="Button component"
          demo={<DemoButton />}
          code={DemoButtonCode}
        >
          MT-Elements provides you some UI elements you can include into your
          apps. In this example you can see de usage of a simple button
        </CodeSample>
      </Section>
      <Section title="Try it yourself">
        <p>Here you can find a little codesandbox example. Give it a try!</p>
        <iframe
          src="https://codesandbox.io/embed/lucid-mclean-i768y?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "500px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden"
          }}
          title="UsageEmbed"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Section>
    </Content>
  );
};

export default Usage;
