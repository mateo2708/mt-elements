import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "mt-elements";

import NavBarLinkStyles from "./NavBarLinkStyles";

const NavBarLink = props => {
  const useStyles = makeStyles(NavBarLinkStyles, props.theme);
  const classes = useStyles();

  const { children } = props;
  return (
    <div className={classes.container}>
      <Link selected {...props} className={classes.navLink}>
        {children}
      </Link>
    </div>
  );
};

export default NavBarLink;
