import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles, useTheme } from "react-jss";
import Option from "../Option/Option";
import AutocompleteStyles from "./AutocompleteStyles";
import classNames from "classnames";
import useOutsideAlerter from "../../constants/hooks/useOutsideAlerter";

const useStyles = createUseStyles(AutocompleteStyles);

/**
 * Autocomplete component
 *
 * @component Autocomplete
 * @property {string} size - Size of the input: [large, medium, small]
 * @property {string} label - Label text
 * @property {boolean} disabled - Defines where the input is disabled
 * @property {function} onChange - Callback function
 * @property {string} alertMode - Type of alert ["success", "warning", "error"]
 * @property {string} alertMessage - Message of the alert
 * @property {reference} inputRef - Message of the alert
 * @property {array} options - Array of options to autocomplete
 * @property {integer} maxOptions - Define de maximum options to display on the box
 * @example
 * <Autocomplete
 *   placeholder="Escribite"
 *   label="Autocomplete"
 *   options={state}
 * />
 * <Autocomplete
 *   placeholder="Escribite"
 *   label="Autocomplete"
 *   maxOptions="5"
 * >
 *   <Option>Opción 1</Option>
 *   <Option>Opción 2</Option>
 *   <Option>Opción 3</Option>
 *   <Option>Opción 4</Option>
 *   <Option>Opción 5</Option>
 *   <Option>Opción 6</Option>
 * </Autocomplete>
 */
const Autocomplete = props => {
  const {
    id,
    size,
    label,
    placeholder,
    disabled,
    alertMode,
    alertMessage,
    onChange,
    options,
    maxOptions,
    children
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);
  const [text, setText] = useState("");
  const [optArray, setOptArray] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(0);

  const boxClass = classNames({
    [classes.inputContainer]: true,
    [classes[size] || classes.medium]: true,
    [classes[alertMode]]: true,
    [classes.disabled]: disabled
  });

  useEffect(() => {
    if (onChange) {
      onChange(text);
    }
  }, [text, onChange]);

  const arrayFromChildren = nodes => {
    return nodes.reduce((array, child) => {
      return [...array, child.props.children];
    }, []);
  };

  const parseComplexString = string => {
    return string
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleChange = event => {
    const userInput = event.target.value;
    const array = options || arrayFromChildren(children) || [];
    const filteredOptions = array.filter(
      opt => parseComplexString(opt).indexOf(parseComplexString(userInput)) > -1
    );
    const max = parseInt(maxOptions);
    if (userInput === "") {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    if (filteredOptions.length > max) {
      setOptArray(filteredOptions.splice(0, max));
    } else {
      setOptArray(filteredOptions);
    }

    setText(userInput);
  };

  const handleKeyDown = e => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setIsOpen(false);
      setText(optArray[selectedOpt]);
      setSelectedOpt(0);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (selectedOpt === 0) {
        return;
      }
      setSelectedOpt(selectedOpt - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (selectedOpt + 1 === optArray.length) {
        return;
      }
      setSelectedOpt(selectedOpt + 1);
    }
  };

  const handleClickOption = event => {
    event.persist();
    const value = event.target.getAttribute("value");
    setText(value);
    setSelectedOpt(0);
    setOptArray([]);
    setIsOpen(false);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const boxRef = useRef();
  const inputRef = useRef();
  useOutsideAlerter([inputRef, boxRef], handleBlur);

  const parentProps = ({ alertMode, alertMessage, reference }, ...props) =>
    props;
  return (
    <div className={classes.container}>
      {label && (
        <div className={classes.label}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className={boxClass} data-testid="input-box">
        <input
          {...parentProps}
          id={id}
          type={text}
          className={classes.input}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          value={text}
        />
        {isOpen ? (
          <div ref={boxRef} className={classes.optionBox}>
            <ul>
              {optArray.length !== 0 ? (
                optArray.map((item, index) => {
                  return (
                    <Option
                      key={index}
                      value={item}
                      hideIcon
                      selected={index === selectedOpt}
                      onClick={handleClickOption}
                    >
                      {item}
                    </Option>
                  );
                })
              ) : (
                <span className={classes.noOptions}>No available options</span>
              )}
            </ul>
          </div>
        ) : (
          undefined
        )}
      </div>
      {alertMessage && (
        <div className={classes[`${alertMode}Message`]}>{alertMessage}</div>
      )}
    </div>
  );
};

Autocomplete.Option = Option;

Autocomplete.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  alertMode: PropTypes.string,
  alertMessage: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  maxOptions: PropTypes.number
};

export default Autocomplete;
