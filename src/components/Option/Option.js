import React from "react";
import PropTypes from "prop-types";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";
import OptionStyles from "./OptionStyles";
import { FaCheck } from "react-icons/fa";

const useStyles = createUseStyles(OptionStyles);

/**
 * Option component
 *
 * @component InputText
 * @param {string} value - Value of the option
 * @param {boolean} selected - Defines if the option is marcked as selected
 * @param {node} icon - Customizable icon for selected option
 * @param {function} onClick - Event handler function
 * @param {boolean} hideIcon - Defines if the Option should show a selected icon
 * @example
 * <Option value="1">Opción 1</Option>
 */
const Option = (props) => {
  const { value, selected, children, icon, onClick, hideIcon } = props;

  const theme = useTheme();
  const classes = useStyles(theme);

  const optionClass = classNames({
    [classes.option]: true,
    [classes.selected]: selected,
  });

  return (
    <li value={value || children} className={optionClass} onClick={onClick}>
      {children}
      {!hideIcon && selected
        ? icon || <FaCheck className={classes.icon} />
        : null}
    </li>
  );
};

Option.propTypes = {
  selected: PropTypes.bool,
  hideIcon: PropTypes.bool,
  icon: PropTypes.node,
};

export default Option;
