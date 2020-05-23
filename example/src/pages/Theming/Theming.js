import React from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";
import CodeElement from "../../components/CodeElement/CodeElement";

const themingCode = `
import React from "react";
import ReactDOM from "react-dom";
import { ThemeMTProvider } from "mt-elements";
import { Button } from "mt-elements";

//Defined Theme
const mainTheme = {
    primaryColor: "rgb(0,82,154)",
    secondaryColor: "rgb(131,175,220)",
    linkColor: "purple",
    successColor: "green",
    warningColor: "orange",
    errorColor: "red",
    fontSizeBase: "14px",
    textColor: "black",
    textColorSecondary: "white",
    fontFamily: "'Open Sans', sans-serif",
    secondaryFontFamily: "'Montserrat', sans-serif"
}

//Child Component
import { withTheme, makeStyles } from "mt-elements";

const myStyles = theme => {
  return {
    myComponentClass: {
      color: theme.primaryColor
    }
  };
};

const MyComponent = props => {
  const useStyles = makeStyles(myStyles, props.theme);
  const classes = useStyles();
  return (
    <div clasName={classes.myComponentClass}>
      <Button />
    </div>
  );
};

//Theme Provider
ReactDOM.render(
  <ThemeMTProvider theme={mainTheme}>
    <MyComponent />
  </ThemeMTProvider>,
  document.getElementById("root")
);
`;

const Theming = () => {
  return (
    <Content>
      <Section title="Theming">
        <p>
          MT elements includes use Javascript Styles to stylize components, the
          library exports two main elements that will allow you to modify those
          styles.
        </p>
        <h2>Theme variables:</h2>
        <ul>
          <li>
            <strong>
              <code>primaryColor</code>
            </strong>
            : Main color of the app.
          </li>
          <li>
            <strong>
              <code>secondaryColor</code>
            </strong>
            : Secondary color of the app.
          </li>
          <li>
            <strong>
              <code>successColor</code>
            </strong>
            : Color used to success messages.
          </li>
          <li>
            <strong>
              <code>warningColor</code>
            </strong>
            : Color used to warning messages.
          </li>
          <li>
            <strong>
              <code>errorColor</code>
            </strong>
            : Color used to error messages.
          </li>
          <li>
            <strong>
              <code>fontSizeBase</code>
            </strong>
            : Base font size for the app.
          </li>
          <li>
            <strong>
              <code>textColor</code>
            </strong>
            : Main color for text.
          </li>
          <li>
            <strong>
              <code>textColorSecondary</code>
            </strong>
            : Secondary color for text.
          </li>
          <li>
            <strong>
              <code>fontFamily</code>
            </strong>
            : Main font family used in the app.
          </li>
          <li>
            <strong>
              <code>secondaryFontFamily</code>
            </strong>
            : Secondary font family used in the app.
          </li>
        </ul>
        <h2>How to use it:</h2>
        <p>
          To use the theming feature you’ll need to create a JSON with the theme
          variables and pass it to a theme provider. The ThemeMTProvider will do
          the job for done for you and if you only need to change some variables
          you can use and edit the default theme by importing defaultThemes from
          MT elements.
        </p>
        <CodeElement language="jsx" code={themingCode} />
      </Section>
    </Content>
  );
};

export default Theming;
