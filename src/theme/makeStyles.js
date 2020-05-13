import { createUseStyles, useTheme } from "react-jss";

const makeStyles = styles => {
  const theme = useTheme() || {};
  return createUseStyles(styles, { theme });
};

export default makeStyles;
