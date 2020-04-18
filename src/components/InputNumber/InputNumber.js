import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import inputNumberStyles from "./InputNumberStyles";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(inputNumberStyles);

/**
 * InputNumber component
 *
 * @component InputNumber
 * @param {string} size - Size of the input: [large, medium, small]
 * @param {string} shape - Shape of input: [round]
 * @param {string} label - Label text
 * @param {number} step - Step value for spinner action
 * @param {number} max - Max value
 * @param {number} min - Min Value
 * @param {function} formatter - Function to format the input value
 * @param {boolean} disabled - Defines where the input is disabled
 * @param {function} onChange - Callback function
 * @param {string} alertMode - Type of alert ["success", "warning", "error"]
 * @param {string} alertMessage - Message of the alert
 * @param {reference} inputRef - Message of the alert
 * @example
 * <InputNumber
 *   size="large"
 *   placeholder="Formateado"
 *   formatter={value =>
 *     `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
 *   }
 *   max="10000"
 *   min="0"
 *   step="100"
 * />
 */
const InputNumber = props => {
  const {
    size,
    label,
    shape,
    step,
    max,
    min,
    formatter,
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
  const [value, setValue] = useState("");
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
      onChange(value);
    }
  }, [value, onChange]);

  const handleChange = event => {
    let text = event.target.value;
    let newValue = parseFloat(text.replace(/[^0-9.]/g, ""));
    setValue(newValue);
  };

  useEffect(() => {
    if (max || min) {
      const maxValue = parseFloat(max);
      const minValue = parseFloat(min);
      if (value > maxValue) {
        setValue(maxValue);
      } else if (value < minValue) {
        setValue(minValue);
      }
    }
  }, [value, max, min]);

  const toggleShowSpinner = () => {
    setShowSpinner(!showSpinner);
  };

  const handleSpinnerAction = action => {
    const stepValue = parseFloat(step) || 1;
    switch (action) {
      case "up":
        setValue((value === "" ? 0 : value) + stepValue);
        break;
      case "down":
        setValue((value === "" ? 0 : value) - stepValue);
        break;
      default:
        break;
    }
  };

  const formatValue = (value, formatter) => {
    if (value === "" || isNaN(value) || value === undefined) {
      return "";
    } else {
      return formatter(value);
    }
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
          type={formatter ? "text" : "number"}
          className={classes.input}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          ref={inputRef}
          value={formatter ? formatValue(value, formatter) : value}
        />
        {
          <div
            style={{ opacity: showSpinner ? 1 : 0 }}
            className={classes.spinner}
          >
            <div
              className={classes.upArrow}
              onClick={() => handleSpinnerAction("up")}
            >
              <FaCaretUp style={{ margin: 0 }} />
            </div>
            <div
              className={classes.downArrow}
              onClick={() => handleSpinnerAction("down")}
            >
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
