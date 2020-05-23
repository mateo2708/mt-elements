const SideMenuStyles = theme => {
  return {
    container: {
      backgroundColor: "white",
      flex: "0 0 22rem",
      height: "100%",
      borderTop: "1px solid #efefef",
      boxShadow: "3px 0px 3px 0px rgba(0,0,0,0.1)",
      display: "flex",
      flexFlow: "column nowrap",
      zIndex: 5
    },
    itemBox: {
      height: "4rem",
      display: "flex",
      alignItems: "center",
      borderTop: "1px solid #efefef",
      borderBottom: "1px solid #efefef"
    },
    link: {
      width: "100%",
      height: "100%",
      fontFamily: theme.secondaryFontFamily,
      backgroundColor: "transparent",
      color: "#3f3f3f",
      border: "none",
      fontWeight: "500",
      transition: "color 0.2s ease",
      textDecoration: "none",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingLeft: "15px",
      "&:disabled": {
        opacity: 0.9,
        color: "#a9a9a9"
      },
      "&:hover": {
        color: theme.primaryColor,
        backgroundColor: "#efefff"
      }
    },
    selected: {
      borderRight: `3px solid ${theme.primaryColor}`,
      color: theme.primaryColor
    }
  };
};

export default SideMenuStyles;
