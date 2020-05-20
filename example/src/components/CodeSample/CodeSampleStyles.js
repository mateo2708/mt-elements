const CodeSampleStyles = () => {
  return {
    container: {
      flexGrow: 1,
      display: "flex",
      flexFlow: "row wrap",
      padding: "15px",
      backgroundColor: "white",
      borderRadius: "15px",
      boxShadow: "2px 2px 5px 2px rgba(0,0,0,0.1)"
    },
    leftBox: {
      display: "flex",
      flexFlow: "column nowrap",
      flex: "1 0 20rem",
      justifyContent: "flex-start",
      padding: "0 2rem 0 1rem",
      alignItems: "stretch"
    },
    info: {
      flex: "1 0 5rem",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start"
    },
    title: {
      flex: "1 0 15rem",
      borderBottom: "1px solid #d0d0d0",
      color: "#676767",
      "& h3": {
        margin: "5px 0"
      }
    },
    description: {
      flex: "1 1 100%",
      minHeight: "3rem"
    },
    demo: {
      border: "1px solid #d0d0d0",
      borderRadius: "10px",
      backgroundColor: "#fafafa",
      flex: "1 0 5rem",
      marginTop: "1rem",
      display: "flex",
      alignItems: "center",
      padding: "8px"
    },
    rightBox: {
      flex: "1 0 20rem",
      padding: "0 1rem"
    }
  };
};

export default CodeSampleStyles;
