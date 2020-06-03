const buttonStyles = theme => {
  return {
    button: {
      fontFamily: theme.secondaryFontFamily,
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      margin: "0.5rem",
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        cursor: "pointer"
      },
      "&:active": {
        boxShadow: `0px 0px 20px -10px ${theme.primaryColor}`
      }
    },
    large: {
      height: "40px",
      padding: "6.4px 15px",
      fontSize: "1.2rem"
    },
    medium: {
      height: "32px",
      padding: "4px 15px",
      fontSize: "1.1rem"
    },
    small: {
      height: "2rem",
      padding: "0 7px",
      fontSize: "1rem"
    },
    primary: {
      backgroundColor: theme.primaryColor,
      color: theme.textColorSecondary,
      border: `1px solid ${theme.primaryColor}`,
      borderRadius: "4px",
      transition:
        "background-color 0.2s ease, color 0.2s ease, border 0.2s ease",
      "&:hover": {
        backgroundColor: "white",
        color: theme.primaryColor,
        border: `1px solid ${theme.primaryColor}`
      },
      "&:disabled": {
        opacity: 0.9,
        backgroundColor: theme.disabledBackgroundColor,
        color: theme.disabledTextColor,
        border: `1px solid ${theme.borderColor}`
      }
    },
    secondary: {
      backgroundColor: "white",
      color: theme.borderColor,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: "4px",
      transition: "color 0.2s ease, border 0.2s ease",
      "&:hover": {
        color: theme.primaryColor,
        border: `1px solid ${theme.primaryColor}`
      },
      "&:disabled": {
        opacity: 0.9,
        backgroundColor: theme.disabledBackgroundColor,
        color: theme.disabledTextColor,
        border: `1px solid ${theme.borderColor}`
      }
    },
    dashed: {
      backgroundColor: "white",
      color: theme.borderColor,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: "4px",
      transition: "color 0.2s ease, border 0.2s ease",
      "&:hover": {
        color: theme.primaryColor,
        border: `1px dashed ${theme.primaryColor}`
      },
      "&:disabled": {
        opacity: 0.9,
        backgroundColor: theme.disabledBackgroundColor,
        color: theme.disabledTextColor,
        border: `1px solid ${theme.borderColor}`
      }
    },
    link: {
      backgroundColor: "transparent",
      color: theme.primaryColor,
      border: "none",
      fontWeight: "normal",
      transition: "color 0.2s ease",
      "&:disabled": {
        opacity: 0.9,
        color: theme.disabledTextColor
      }
    },
    round: {
      borderRadius: "50rem"
    }
  };
};

export default buttonStyles;
