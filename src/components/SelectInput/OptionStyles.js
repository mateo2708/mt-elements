import { flexRowWrap } from "../../theme/stylesData";

const OptionStyles = (theme) => {
  return {
    option: {
      ...flexRowWrap,
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "32px",
      color: theme.textColor,
      backgroundColor: "white",
      padding: "0 8px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#efefef",
      },
    },
    selected: {
      backgroundColor: "#dfdfdf",
      "&:hover": {
        backgroundColor: "#dfdfdf",
      },
    },
    icon: {
      color: theme.primaryColor,
    },
  };
};
export default OptionStyles;
