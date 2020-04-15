import React from "react";
import PropTypes from "prop-types";
import buttonStyles from "./ButtonStyles";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(buttonStyles);

/**
 * Button component
 *
 * @component Button
 * @param {string} type - Type of button: [primary, secondary, dashed, link]
 * @param {string} size - Size button: [large, medium, small]
 * @param {string} shape - Shape of button: [round]
 * @param {boolean} disabled - Defines where the button is disabled
 * @param {function} onClick - Callback function
 * @example
 * const handleAction = () => {
 *    console.log("Clicked!")
 * }
 * <Button type="primary" size="large" shape="round" onClick={handleAction}>
 *    Click me!
 * </Button>
 */

const Button = (props) => {
  const { type, size, shape, disabled, onClick, className, children } = props;
  useTheme();

  const classes = useStyles();
  const buttonClass = classNames({
    [classes.button]: true,
    [classes[size] || classes.medium]: true,
    [classes[type] || classes.primary]: true,
    [classes[shape] || null]: true,
    [className || null]: true,
  });

  return (
    <button
      {...props}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "dashed", "link"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
