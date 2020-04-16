import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import inputNumberStyles from "./InputNumberStyles";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(inputNumberStyles);

const InputNumber = props => {
  const {
    size,
    label,
    shape,
    placeholder,
    disabled,
    alertMode,
    alertMessage,
    onChange,
    inputRef,
    className
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);
  const [text, setText] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const boxClass = classNames({
    [classes.inputContainer]: true,
    [classes[size] || classes.medium]: true,
    [classes[shape]]: true,
    [classes[alertMode]]: true,
    [classes.disabled]: disabled,
    className
  });

  useEffect(() => {
    if (onChange) {
      onChange(text);
    }
  }, [text, onChange]);

  const handleChange = event => {
    let text = event.target.value;
    setText(text.replace(/[^0-9.]/g, ""));
  };

  const toggleShowSpinner = () => {
    setShowSpinner(!showSpinner);
  };

  const parentProps = ({ alertMode, alertMessage, reference }, ...props) =>
    props;

  return (
    <div className={classes.container}>
      {label && <div className={classes.label}>{label}</div>}
      <div
        className={boxClass}
        onMouseEnter={toggleShowSpinner}
        onMouseLeave={toggleShowSpinner}
      >
        <input
          {...parentProps}
          type="number"
          className={classes.input}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          ref={inputRef}
          value={text}
        />
        {
          <div
            style={{ opacity: showSpinner ? 1 : 0 }}
            className={classes.spinner}
          >
            <div className={classes.upArrow}>
              <FaCaretUp style={{ margin: 0 }} />
            </div>
            <div className={classes.downArrow}>
              <FaCaretDown style={{ margin: 0 }} />
            </div>
          </div>
        }
      </div>
      {alertMessage && (
        <div className={classes[`${alertMode}Message`]}>{alertMessage}</div>
      )}
    </div>
  );
};

InputNumber.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "search"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  shape: PropTypes.oneOf(["round"]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  alertMode: PropTypes.string,
  alertMessage: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.node
};

export default InputNumber;
