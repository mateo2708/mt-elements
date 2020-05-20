const SectionStyles = theme => {
  return {
    sectionContainer: {
      marginBottom: "3rem",
      width: "100%",
      fontFamily: theme.fontFamily,
      "& h1": {
        fontSize: "2rem",
        color: theme.primaryColor
      },
      "& h2": {
        color: "#676767"
      },
      "& ul": {
        listStyleType: "circle",
        paddingInlineStart: "2rem",
        "& li": {
          margin: "5px 0"
        }
      }
    },
    titleContainer: {
      width: "100%",
      minHeigth: "5rem",
      "& h1": {
        fontSize: "2rem",
        color: theme.primaryColor
      }
    },
    content: {
      width: "100%"
    }
  };
};
export default SectionStyles;
