const MainLayoutStyles = () => {
  return {
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fafafa",
      display: "flex",
      flexFlow: "column nowrap",
      overflow: "hidden"
    },
    contentContainer: {
      display: "flex",
      flexGrow: 1,
      overflow: "hidden"
    },
    mainContent: {
      flexGrow: 1,
      overflow: "auto"
    }
  };
};

export default MainLayoutStyles;
