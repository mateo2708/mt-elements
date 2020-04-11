import React, { useContext } from "react";
import buttonStyles from "./ButtonStyles";
import { ThemeContext } from "../../constants/context/context";

const Button = () => {
  const theme = useContext(ThemeContext);
  const classes = buttonStyles(theme);
  console.log("Tema:", theme);
  return <button style={classes.button}>Probando boton</button>;
};

export default Button;
