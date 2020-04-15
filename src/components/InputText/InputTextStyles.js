import { flexCenterRow, flexRowWrap } from "../../theme/stylesData";

const InputTextStyles = (theme) => {
  return {
    container: {
      margin: "1rem",
    },
    inputContainer: {
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
    round: {
      borderRadius: "50rem",
      "& :first-child": {
        borderRadius: "50rem",
      },
      "& :last-child": {
        borderRadius: "50rem",
      },
    },
    icon: {
      width: "30px",
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
  };
};

export default InputTextStyles;
