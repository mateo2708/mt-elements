import { createUseStyles, useTheme } from "react-jss";
import defaultThemes from "./defaultThemes";

const makeStyles = styles => {
  const theme = useTheme() || defaultThemes.light;
  return createUseStyles(styles, { theme });
};

export default makeStyles;
