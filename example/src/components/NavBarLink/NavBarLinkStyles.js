const NavBarLinkStyles = theme => {
  return {
    container: {
      width: "10rem",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingBottom: "5px",
      "&:hover": {
        borderTop: `3px solid ${theme.primaryColor}`
      }
    },
    selected: {
      borderTop: `3px solid ${theme.primaryColor}`,
      color: theme.primaryColor
    },
    navLink: {
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
      justifyContent: "center",
      alignItems: "center",
      "&:disabled": {
        opacity: 0.9,
        color: "#a9a9a9"
      },
      "&:hover": {
        color: theme.primaryColor
      }
    }
  };
};

export default NavBarLinkStyles;
