import React from "react";
import { withTheme, makeStyles } from "mt-elements";
import SideMenuStyles from "./SideMenuStyles";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { getItems } from "../../constants/dataStructure";

const SideMenu = props => {
  const useStyles = makeStyles(SideMenuStyles, props.theme);
  const classes = useStyles();

  const { page, selectedItem } = props;

  const items = getItems(page);
  return (
    <div className={classes.container}>
      {items.map((item, key) => {
        const selected = selectedItem === item.route;

        const itemClass = classNames({
          [classes.itemBox]: true,
          [classes.selected]: selected
        });

        return (
          <div className={itemClass} key={key}>
            <Link className={classes.link} to={`/mt-elements/${page}/${item.route}`}>
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default withTheme(SideMenu);
