import React from "react";
import TableStyles from "./TableStyles";
import { withTheme, makeStyles } from "mt-elements";

const Table = props => {
  const useStyles = makeStyles(TableStyles, props.theme);
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
          <tr className={classes.header}>
            {data.headers.map((header, key) => {
              return <td key={key}>{header}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.map((row, key) => {
            return (
              <tr key={key}>
                {Object.keys(row).map((element, key) => {
                  return <td key={key}>{row[element]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default withTheme(Table);
