import { flexRowWrap, boxShadow } from "../../theme/stylesData";

const InputNumberStyles = theme => {
  return {
    container: {
      margin: "1rem"
    },
    inputContainer: {
      position: "relative",
      ...flexRowWrap,
      border: "1px solid #a9a9a9",
      borderRadius: "3px"
    },
    input: {
      flexGrow: 1,
      height: "100%",
      color: theme.textColor,
      fontFamily: theme.fontFamily,
      fontSize: "1.1rem",
      border: "none",
      padding: "0 8px",
      borderRadius: "3px",
      "&:disabled": {
        backgroundColor: "#d8d8d8",
        color: "#a9a9a9",
        cursor: "not-allowed"
      },
      "&:focus": {
        outline: 0,
        ...boxShadow(1)
      },
      WebkitAppearance: "textfield",
      MozAppearance: "textfield",
      appearance: "textfield",
      '&::-webkit-inner-spin-button,\n  input[type="number"]::-webkit-outer-spin-button': {
        WebkitAppearance: "none"
      }
    },
    large: {
      height: "40px"
    },
    medium: {
      height: "32px"
    },
    small: {
      height: "24px"
    },
    round: {
      borderRadius: "50rem",
      "& :first-child": {
        borderRadius: "50rem"
      },
      "& :last-child": {
        borderRadius: "50rem"
      }
    },
    spinner: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "30px",
      height: "100%",
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "center",
      transition: "opacity .24s linear .1s",
      "&:hover": {
        cursor: "pointer"
      }
    },
    upArrow: {
      textAlign: "center",
      width: "100%",
      height: "50%",
      backgroundColor: "#00000010",
      borderLeft: "1px solid #00000030",
      borderBottom: "1px solid #00000030",
      "&:hover": {
        backgroundColor: "#00000018"
      }
    },
    downArrow: {
      textAlign: "center",
      width: "100%",
      height: "50%",
      backgroundColor: "#00000010",
      borderLeft: "1px solid #00000030",
      borderTop: "1px solid #00000030",
      "&:hover": {
        backgroundColor: "#00000018"
      }
    },
    label: {
      fontWeight: "500",
      marginBottom: "2px",
      marginLeft: "1px",
      color: theme.textColor
    },
    error: {
      borderColor: theme.errorColor
    },
    errorMessage: {
      textAlign: "right",
      color: theme.errorColor,
      fontSize: "0.9rem"
    },
    warning: {
      borderColor: theme.warningColor
    },
    warningMessage: {
      textAlign: "right",
      color: theme.warningColor,
      fontSize: "0.9rem"
    },
    success: {
      borderColor: theme.successColor
    },
    successMessage: {
      textAlign: "right",
      color: theme.successColor,
      fontSize: "0.9rem"
    },
    disabled: {
      opacity: 0.9,
      backgroundColor: "#d8d8d8",
      border: "1px solid #a9a9a9"
    }
  };
};

export default InputNumberStyles;
