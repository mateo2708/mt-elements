import React from "react";
import { createUseStyles, ThemeProvider } from "react-jss";

const ThemeMTProvider = props => {
  const { theme } = props;
  const useStyles = createUseStyles({
    "@global": {
      html: {
        color: theme.textColor || null,
        font: `${theme.fontSizeBase} ${theme.fontFamily}`
      },
      body: {
        margin: 0
      }
    }
  });
  if (!theme) {
    throw new Error(
      "You need to declare a theme prop to use the ThemeProvider"
    );
  }
  useStyles();
  return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>;
};

export default ThemeMTProvider;
