import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import inputTextStyles from "./InputTextStyles";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(inputTextStyles);

/**
 * InputText component
 *
 * @component InputText
 * @param {string} type - Type of input: [text, email, password]
 * @param {string} size - Size of the input: [large, medium, small]
 * @param {string} shape - Shape of input: [round]
 * @param {string} label - Label text
 * @param {boolean} disabled - Defines where the input is disabled
 * @param {function} onChange - Callback function
 * @example
 * <InputText
 *    type="password"
 *    placeholder="Placeholder"
 *    shape="round"
 *    label="Läbel"
 *    onChange={(e) => console.log(e))}
 * />
 */

const InputText = (props) => {
  const {
    type,
    size,
    label,
    shape,
    placeholder,
    disabled,
    error,
    onChange,
    ref,
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);
  const [text, setText] = useState("");
  const [contType, setContType] = useState(text);
  const [passwordFlag, setPasswordFlag] = useState(true);

  const boxClass = classNames({
    [classes.inputContainer]: true,
    [classes[size] || classes.medium]: true,
    [classes[shape]]: true,
  });

  useEffect(() => {
    if (type === "password") {
      setContType(passwordFlag && type);
    } else {
      setContType(type);
    }
  }, [type, passwordFlag]);

  useEffect(() => {
    if (onChange) {
      onChange(text);
    }
  }, [text, onChange]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePassword = () => {
    setPasswordFlag(!passwordFlag);
  };

  return (
    <div className={classes.container}>
      {label && <div className={classes.label}>{label}</div>}
      <div className={boxClass}>
        <input
          {...props}
          type={contType}
          autoComplete="off"
          className={classes.input}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          value={text}
        />
        {type === "password" && (
          <div className={classes.icon} onClick={handlePassword}>
            <i>{passwordFlag ? "Si" : "No"}</i>
          </div>
        )}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "search"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  shape: PropTypes.oneOf(["round"]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  ref: PropTypes.node,
};

export default InputText;
