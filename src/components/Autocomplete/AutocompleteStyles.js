import { flexCenterRow, flexRowWrap, boxShadow } from "../../theme/stylesData";

const AutocompleteStyles = (theme) => {
  return {
    container: {
      margin: "1rem",
    },
    inputContainer: {
      position: "relative",
      ...flexRowWrap,
      border: "1px solid #a9a9a9",
      borderRadius: "3px",
    },
    input: {
      flexGrow: 1,
      height: "100%",
      color: theme.textColor,
      fontFamily: theme.fontFamily,
      border: "none",
      padding: "0 8px",
      borderRadius: "3px",
      "&:disabled": {
        backgroundColor: "#d8d8d8",
        color: "#a9a9a9",
        cursor: "not-allowed",
      },
      "&:focus": {
        outline: 0,
        ...boxShadow(1),
      },
    },
    large: {
      height: "40px",
    },
    medium: {
      height: "32px",
    },
    small: {
      height: "24px",
    },
    icon: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "30px",
      height: "100%",
      ...flexCenterRow,
      "&:hover": {
        cursor: "pointer",
      },
    },
    label: {
      fontWeight: "500",
      marginBottom: "2px",
      marginLeft: "1px",
      color: theme.textColor,
    },
    error: {
      borderColor: theme.errorColor,
    },
    errorMessage: {
      textAlign: "right",
      color: theme.errorColor,
      fontSize: "0.9rem",
    },
    warning: {
      borderColor: theme.warningColor,
    },
    warningMessage: {
      textAlign: "right",
      color: theme.warningColor,
      fontSize: "0.9rem",
    },
    success: {
      borderColor: theme.successColor,
    },
    successMessage: {
      textAlign: "right",
      color: theme.successColor,
      fontSize: "0.9rem",
    },
    disabled: {
      opacity: 0.9,
      backgroundColor: "#d8d8d8",
      border: "1px solid #a9a9a9",
      cursor: "not-allowed",
    },
    optionBox: {
      width: "100%",
      maxHeight: "20rem",
      overflow: "auto",
      backgroundColor: "white",
      ...boxShadow(2),
      padding: "4px 0",
      borderRadius: "3px",
      position: "absolute",
      top: "calc(100% + 1px)",
      zIndex: 200,
      left: 0,
      "& ul": {
        padding: 0,
        margin: 0,
      },
    },
    noOptions: {
      color: "#a9a9a9",
      marginLeft: "8px",
    },
  };
};

export default AutocompleteStyles;
