const buttonStyles = (theme) => {
  return {
    button: {
      backgroundColor: theme.primaryColor,
      color: theme.secondaryColor,
      border: `1px solid ${theme.secondaryColor}`,
    },
  };
};

export default buttonStyles;
