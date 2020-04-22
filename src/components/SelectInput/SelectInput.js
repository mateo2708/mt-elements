import React, { useState, useEffect, useRef, useReducer } from "react";
import Option from "./Option";
import { createUseStyles, useTheme } from "react-jss";
import SelectInputStyles from "./SelectInputStyles";
import classNames from "classnames";
import { FaAngleUp, FaAngleDown, FaTimesCircle } from "react-icons/fa";

import useOutsideAlerter from "../../constants/hooks/useOutsideAlerter";

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
    children,
    className,
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);

  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(true);

  const boxRef = useRef();
  const inputRef = useRef();

  const boxClass = classNames({
    [classes.inputContainer]: true,
    [classes[size] || classes.medium]: true,
    [classes[shape]]: shape,
    [classes[alertMode]]: alertMode,
    [classes.focused]: focused,
    [classes.disabled]: disabled,
    [className]: className,
  });

  const handleSelection = (event) => {
    const value = event.target.value
      ? event.target.value.toString()
      : undefined;

    dispatch({ type: "selection", value: value });
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
    return selected.includes(value ? value.toString() : undefined);
  };

  const getElementFromChildren = (value) => {
    const child = children.find((item) => item.props.value === value);
    return child ? child.props.children : undefined;
  };

  const selectionReducer = (state, action) => {
    const { type, value } = action;
    switch (type) {
      case "selection":
        console.log("Selection detected: ", value);
        if (mode === "multiple") {
          console.log("entró al multiple");
          if (value && state.includes(value.toString())) {
            return state.filter((item) => item !== value);
          } else if (value) {
            console.log("volvió a entrar");
            return [...state, value];
          }
        }
        return [value === state[0] ? undefined : value];
      case "add":
        return [...state, value];
      case "remove":
        return state.filter((item) => item !== value);
      default:
        return state;
    }
  };
  const [selected, dispatch] = useReducer(selectionReducer, []);

  useEffect(() => {
    if (onChange) {
      const handleChange = () => {
        if (mode === "multiple") {
          return selected;
        }
        return selected[0];
      };
      onChange(handleChange());
    }
  }, [selected, mode, onChange]);

  useOutsideAlerter([boxRef, inputRef], () => setIsOpen(false));

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
          ref={inputRef}
          readOnly
          className={classNames({
            [classes.input]: true,
            [classes.inputMultiple]: mode === "multiple",
          })}
          value={
            (mode !== "multiple" && getElementFromChildren(selected[0])) || ""
          }
          placeholder={
            mode !== "multiple"
              ? placeholder
              : selected.length === 0
              ? placeholder
              : ""
          }
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
        />
        {mode === "multiple" ? (
          <div className={classes.multipleBox}>
            {selected.map((item, key) => {
              return (
                <div className={classes.multipleElement} key={key}>
                  {getElementFromChildren(item)}
                  <div className={classes.multipleElementIcon}>
                    <FaTimesCircle
                      color="#a0a0a0"
                      onClick={() => dispatch({ type: "remove", value: item })}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        {isOpen ? (
          <div ref={boxRef} className={classes.optionBox}>
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
        ) : undefined}
      </div>
      {alertMessage && (
        <div className={classes[`${alertMode}Message`]}>{alertMessage}</div>
      )}
    </div>
  );
};

SelectInput.Option = Option;

export default SelectInput;
