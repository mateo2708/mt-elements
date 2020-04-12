import React from "react";
import { createUseStyles, ThemeProvider } from "react-jss";

const useStyles = (theme) =>
  createUseStyles({
    "@global": {
      html: {
        color: theme.textColor || null,
        fontSize: theme.fontSizeBase || null,
        fontFamily: theme.fontFamily || null,
      },
      body: {
        margin: 0,
      },
    },
  });

const ThemeMTProvider = (props) => {
  useStyles(props.theme);
  return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>;
};

export default ThemeMTProvider;
