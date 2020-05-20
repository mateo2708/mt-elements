import React from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeElement from "../../components/CodeElement/CodeElement";

import { Link } from "react-router-dom";

const Installation = props => {
  return (
    <Content>
      <Section title="Installation">
        <p>
          MT- Elements is available in npm packages (
          <a
            href="https://www.npmjs.com/package/mt-elements"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/mt-elements
          </a>
          )
        </p>
        <h2>npm</h2>
        To install and save in your <code>package.json</code> dependencies, run:
        <div style={{ width: "50rem" }}>
          <CodeElement code={`npm install mt-elements`} language="bash" />
        </div>
        <h2>yarn</h2>
        To install and save in your <code>package.json</code> dependencies, run:
        <div style={{ width: "50rem" }}>
          <CodeElement code={`yarn add mt-elements`} language="bash" />
        </div>
      </Section>
      <Section>
        <Link to="/docs/usage">How to use it?</Link>
      </Section>
    </Content>
  );
};

export default Installation;
