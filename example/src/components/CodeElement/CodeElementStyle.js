const CodeElementStyle = () => {
  return {
    container: {
      flexBasis: "20rem",
      borderRadius: "10px",
      overflow: "hidden",
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
