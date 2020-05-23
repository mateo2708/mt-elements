const TableStyles = theme => {
  const tableBorder = "1px solid #d0d0d0";
  return {
    tableContainer: {
      width: "100%",
      flexGrow: 1,
      padding: "10px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: theme.fontFamily,
      border: tableBorder,
      "& tr": {
        borderTop: tableBorder,
        borderBottom: tableBorder
      },
      "& td": {
        borderTop: tableBorder,
        borderBottom: tableBorder,
        padding: "1rem 1rem",
        textAlign: "left"
      }
    },
    header: {
      fontWeight: "bold",
      backgroundColor: "#efefef",
      color: theme.primaryColor,
      textTransform: "capitalize"
    }
  };
};

export default TableStyles;
