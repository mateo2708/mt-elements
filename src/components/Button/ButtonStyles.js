const buttonStyles = (theme) => {
  return {
    button: {
      fontFamily: theme.secondaryFontFamily,
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      margin: "0.5rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
    large: {
      height: "40px",
      padding: "6.4px 15px",
      fontSize: "1.2rem",
    },
    medium: {
      height: "32px",
      padding: "4px 15px",
      fontSize: "1.1rem",
    },
    small: {
      height: "2rem",
      padding: "0 7px",
      fontSize: "1rem",
    },
    primary: {
      backgroundColor: theme.primaryColor,
      color: theme.textColorSecondary,
      border: `2px solid ${theme.primaryColor}`,
      borderRadius: "4px",
      transition:
        "background-color 0.2s ease, color 0.2s ease, border 0.2s ease",
      "&:hover": {
        backgroundColor: "white",
        color: theme.primaryColor,
        border: `2px solid ${theme.primaryColor}`,
      },
      "&:disabled": {
        opacity: 0.9,
        backgroundColor: "#d8d8d8",
        color: "#a9a9a9",
        border: "2px solid #a9a9a9",
      },
    },
    secondary: {
      backgroundColor: "white",
      color: "#616161",
      border: "2px solid #9d9d9d",
      borderRadius: "4px",
      transition: "color 0.2s ease, border 0.2s ease",
      "&:hover": {
        color: theme.primaryColor,
        border: `2px solid ${theme.primaryColor}`,
      },
      "&:disabled": {
        opacity: 0.9,
        backgroundColor: "#d8d8d8",
        color: "#a9a9a9",
        border: "2px solid #a9a9a9",
      },
    },
    dashed: {
      backgroundColor: "white",
      color: "#616161",
      border: "2px dashed #9d9d9d",
      borderRadius: "4px",
      transition: "color 0.2s ease, border 0.2s ease",
      "&:hover": {
        color: theme.primaryColor,
        border: `2px dashed ${theme.primaryColor}`,
      },
      "&:disabled": {
        opacity: 0.9,
        backgroundColor: "#d8d8d8",
        color: "#a9a9a9",
        border: "2px dashed #a9a9a9",
      },
    },
    link: {
      backgroundColor: "transparent",
      color: theme.primaryColor,
      border: "none",
      fontWeight: "normal",
      transition: "color 0.2s ease",
      "&:disabled": {
        opacity: 0.9,
        color: "#a9a9a9",
        border: "2px dashed #a9a9a9",
      },
    },
    round: {
      borderRadius: "50rem",
    },
  };
};

export default buttonStyles;
