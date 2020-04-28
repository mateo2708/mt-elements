import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import inputTextStyles from "./InputTextStyles";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const useStyles = createUseStyles(inputTextStyles);

/**
 * InputText component
 *
 * @component InputText
 * @property {string} type - Type of input: [text, email, password]
 * @property {string} size - Size of the input: [large, medium, small]
 * @property {string} shape - Shape of input: [round]
 * @property {string} label - Label text
 * @property {boolean} disabled - Defines where the input is disabled
 * @property {function} onChange - Callback function
 * @property {string} alertMode - Type of alert ["success", "warning", "error"]
 * @property {string} alertMessage - Message of the alert
 * @property {reference} inputRef - Message of the alert
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
    id,
    type,
    size,
    label,
    shape,
    placeholder,
    disabled,
    alertMode,
    alertMessage,
    onChange,
    inputRef,
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
    [classes[alertMode]]: true,
    [classes.disabled]: disabled,
  });

  useEffect(() => {
    if (type === "password") {
      setContType(passwordFlag ? type : "text");
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
  const parentProps = ({ alertMode, alertMessage, reference }, ...props) =>
    props;
  return (
    <div className={classes.container}>
      {label && (
        <div className={classes.label}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div data-testid="input-box" className={boxClass}>
        <input
          {...parentProps}
          id={id}
          type={contType}
          className={classes.input}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          ref={inputRef}
          value={text}
        />
        {type === "password" && (
          <div className={classes.icon} onClick={!disabled && handlePassword}>
            {passwordFlag ? (
              <FaEye color="#a0a0a0" />
            ) : (
              <FaEyeSlash color="#a0a0a0" />
            )}
          </div>
        )}
      </div>
      {alertMessage && (
        <div className={classes[`${alertMode}Message`]}>{alertMessage}</div>
      )}
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "search"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  shape: PropTypes.oneOf(["round"]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  alertMode: PropTypes.string,
  alertMessage: PropTypes.string,
  onChange: PropTypes.func,
  ref: PropTypes.node,
};

export default InputText;
