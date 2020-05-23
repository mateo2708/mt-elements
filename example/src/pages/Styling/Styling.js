import React from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeElement from "../../components/CodeElement/CodeElement";

const exampleCode = `
import React from "react";
import { withTheme, makeStyles } from "mt-elements";

const myStyles = theme => {
  return {
    myClass: {
      padding: "5px",
      borderRadius: "10px",
      color: theme.secondaryColor,
      backgroundColor: theme.primaryColor,
      fontFamily: theme.fontFamily
    }
  };
};

const ExampleComponent = props => {
  const useStyles = makeStyles(myStyles, props.theme);
  const classes = useStyles();
  return <div className={classes.myClass}>Example Component</div>;
};

export default withTheme(ExampleComponent);
`;

const makeStylesCode = `
const useStyles = makeStyles(myStyles, props.theme);
const classes = useStyles();
`;

const withThemeCode = `
export default withTheme(ExampleComponent);
`;

const Styling = () => {
  return (
    <Content>
      <Section title="Styling Elements">
        <p>
          MT elements includes use Javascript Styles to stylize components, the
          library exports two main elements that will allow you to modify those
          styles.
        </p>
        <h2>makeStyles:</h2>
        <p>
          The makeStyles function allows you to use a JSS based stylesheet to
          your component.
        </p>
        <CodeElement code={makeStylesCode} language="jsx" />

        <h2>withTheme:</h2>
        <p>
          The function withTheme is a HOC that allows you to bind your defined
          them into your app. Using this function will allow you to use theme
          variables into your own styles.
        </p>
        <CodeElement code={withThemeCode} language="jsx" />
        <h2>Full Example:</h2>
        <CodeElement code={exampleCode} language="jsx" />
      </Section>
    </Content>
  );
};

export default Styling;
