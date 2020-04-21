import React, { useState } from "react";
import Option from "./Option";
import { createUseStyles, useTheme } from "react-jss";
import SelectInputStyles from "./SelectInputStyles";
import classNames from "classnames";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const useStyles = createUseStyles(SelectInputStyles);

const SelectInput = (props) => {
  const {
    id,
    size,
    label,
    shape,
    mode,
    placeholder,
    disabled,
    alertMode,
    alertMessage,
    onChange,
    // inputRef,
    children,
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);

  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(true);
  const [selected, setSelected] = useState([]);

  const boxClass = classNames({
    [classes.inputContainer]: true,
    [classes[size] || classes.medium]: true,
    [classes[shape] || null]: true,
    [classes[alertMode] || null]: true,
    [classes.focused]: focused,
    [classes.disabled]: disabled,
  });

  const handleChange = () => {
    if (mode === "multiple") {
      return selected;
    }
    return selected[0];
  };

  const handleSelection = (event) => {
    const value = event.target.value.toString();

    if (mode === "multiple") {
      setSelected([]);
    } else {
      selected[0] = value === selected[0] ? null : value;
    }
    onChange(handleChange());
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleFocus = (focus) => {
    if (focus !== focused) {
      setFocused(focus);
    }
  };

  const isSelected = (value) => {
    return selected.includes(value.toString());
  };

  const getElementFromChildren = (value) => {
    const child = children.find((item) => item.props.value === value);
    return child ? child.props.children : null;
  };

  return (
    <div className={classes.container} onClick={handleOpen}>
      {label && (
        <div className={classes.label}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className={boxClass}>
        <div className={classes.icon}>
          {isOpen ? (
            <FaAngleUp color="#a0a0a0" />
          ) : (
            <FaAngleDown color="#a0a0a0" />
          )}
        </div>
        <input
          readOnly
          value={getElementFromChildren(selected[0]) || ""}
          placeholder={placeholder}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
        />
        {isOpen ? (
          <div className={classes.optionBox}>
            <ul>
              {children ? (
                children.map((child, key) => {
                  return React.cloneElement(child, {
                    key: key,
                    handleSelection: handleSelection,
                    selected: isSelected(child.props.value),
                  });
                })
              ) : (
                <span className={classes.noOptions}>No available options</span>
              )}
            </ul>
          </div>
        ) : null}
      </div>
      {alertMessage && (
        <div className={classes[`${alertMode}Message`]}>{alertMessage}</div>
      )}
    </div>
  );
};

SelectInput.Option = Option;

export default SelectInput;
