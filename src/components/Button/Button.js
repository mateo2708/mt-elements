import React from "react";
import PropTypes from "prop-types";
import buttonStyles from "./ButtonStyles";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(buttonStyles);

const Button = (props) => {
  const { type, size, shape, disabled, onClick, children } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  const buttonClass = classNames({
    [classes.button]: true,
    [classes[size] || classes.medium]: true,
    [classes[type] || classes.primary]: true,
    [classes[shape] || null]: true,
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "dashed", "link"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  disabled: PropTypes.bool,
};

export default Button;
