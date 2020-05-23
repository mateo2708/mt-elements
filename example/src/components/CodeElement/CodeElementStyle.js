const CodeElementStyle = () => {
  return {
    container: {
      height: "100%",
      flexBasis: "20rem",
      flexGrow: 1,
      borderRadius: "10px",
      overflow: "auto",
      "& pre": {
        margin: "0",
        width: "100%",
        height: "100%",
        padding: "15px"
      }
    }
  };
};

export default CodeElementStyle;
