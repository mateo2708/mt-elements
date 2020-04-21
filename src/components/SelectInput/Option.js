import React from "react";
import PropTypes from "prop-types";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";
import OptionStyles from "./OptionStyles";
import { FaCheck } from "react-icons/fa";

const useStyles = createUseStyles(OptionStyles);

const Option = (props) => {
  const { selected, children, icon } = props;

  const theme = useTheme();
  const classes = useStyles(theme);

  const optionClass = classNames({
    [classes.option]: true,
    [classes.selected]: selected,
  });

  return (
    <li
      value={props.value || props.children}
      className={optionClass}
      onClick={props.handleSelection}
    >
      {children}{" "}
      {selected ? icon || <FaCheck className={classes.icon} /> : null}
    </li>
  );
};

Option.propTypes = {
  selected: PropTypes.bool,
};

export default Option;
