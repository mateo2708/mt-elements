const MainLayoutStyles = () => {
  return {
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#f6f6f6",
      display: "flex",
      flexFlow: "column nowrap",
      overflow: "hidden"
    },
    contentContainer: {
      display: "flex",
      flexGrow: 1
    }
  };
};

export default MainLayoutStyles;
