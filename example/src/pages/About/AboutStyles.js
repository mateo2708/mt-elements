const AboutStyles = theme => {
  return {
    name: {
      margin: 0,
      fontSize: "1.8rem"
    },
    profesion: {
      margin: 0,
      fontSize: "1.3rem",
      fontWeight: 500,
      color: "#676767"
    },
    contact: {
      display: "flex",
      flexFlow: "column nowrap",
      marginTop: "10px"
    },
    contactElement: {
      display: "flex",
      alignItems: "center",
      padding: "3px",
      fontSize: "1.3rem",
      "& a": {
        marginLeft: "1rem",
        color: theme.primaryColor
      }
    },
    icon: {
      fontSize: "1.5rem",
      color: "#676767"
    }
  };
};

export default AboutStyles;
