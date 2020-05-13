import React from "react";
import { useTheme } from "react-jss";

const withTheme = Comp => props => {
  const theme = useTheme();
  return <Comp theme={theme} {...props} />;
};

export default withTheme;
