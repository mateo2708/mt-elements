import { flexCenterRow, flexRowWrap, boxShadow } from "../../theme/stylesData";

const SelectInputStyles = theme => {
  return {
    container: {
      margin: "1rem",
      flex: "1 0 15rem"
    },
    inputContainer: {
      position: "relative",
      ...flexRowWrap,
      border: "1px solid #a9a9a9",
      borderRadius: "3px",
      alignItems: "center",
      padding: "1px",
      "&:disabled": {
        backgroundColor: "#d8d8d8",
        color: "#a9a9a9",
        cursor: "not-allowed"
      }
    },
    input: {
      width: "100%",
      height: "100%",
      padding: "0 8px",
      paddingRight: "30px",
      border: "none",
      borderRadius: "3px",
      fontFamily: theme.fontFamily,
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      cursor: "pointer",
      "&:focus": {
        outline: 0
      }
    },
    focused: {
      ...boxShadow(1)
    },
    inputMultiple: {
      position: "absolute",
      width: "100%",
      minHeight: "calc(100%)",
      height: "not-set",
      top: 0,
      left: 0,
      padding: "0"
    },
    multipleBox: {
      zIndex: 10,
      height: "inherit",
      ...flexRowWrap,
      alignItems: "center",
      "& .icon": {
        padding: "2px",
        margin: "auto"
      }
    },
    multipleElement: {
      position: "relative",
      backgroundColor: "#e0e0e0",
      borderRadius: "50rem",
      padding: "5px 8px ",
      paddingRight: "30px",
      margin: "2px 3px"
    },
    multipleElementIcon: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 100,
      width: "30px",
      height: "100%",
      ...flexCenterRow,
      "&:hover": {
        cursor: "pointer"
      }
    },
    optionBox: {
      width: "100%",
      backgroundColor: "white",
      ...boxShadow(2),
      padding: "4px 0",
      borderRadius: "3px",
      position: "absolute",
      top: "calc(100% + 5px)",
      zIndex: 200,
      left: 0,
      "& ul": {
        padding: "0 !important",
        margin: "0 !important"
      }
    },
    noOptions: {
      color: "#a9a9a9",
      marginLeft: "8px"
    },
    large: {
      minHeight: "40px"
    },
    medium: {
      minHeight: "32px"
    },
    small: {
      minHeight: "24px"
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
    icon: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 100,
      width: "30px",
      height: "100%",
      ...flexCenterRow,
      "&:hover": {
        cursor: "pointer"
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
      border: "1px solid #a9a9a9",
      cursor: "not-allowed"
    }
  };
};

export default SelectInputStyles;
