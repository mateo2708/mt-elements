import React from "react";
import { ThemeContext } from "../constants/context/context";

const ThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
