const NavBarStyles = theme => {
  return {
    container: {
      backgroundColor: "white",
      width: "100vw",
      height: "55px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 1px 3px 3px rgba(0,0,0,0.1)",
      zIndex: 5
    },
    logo: {
      width: "20rem",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      "& img": {
        height: "100%"
      }
    },
    linksContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexGrow: "1",
      height: "100%"
    },
    socialLinks: {
      height: "100%",
      width: "12rem",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    icon: {
      fontSize: "25px",
      color: "#3f3f3f",
      "&:hover": {
        color: theme.primaryColor
      }
    }
  };
};

export default NavBarStyles;
