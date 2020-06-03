import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "mt-elements";

import NavBarLinkStyles from "./NavBarLinkStyles";
import classNames from "classnames";

const NavBarLink = props => {
  const useStyles = makeStyles(NavBarLinkStyles, props.theme);
  const classes = useStyles();

  const { children, selected } = props;

  const containerClass = classNames({
    [classes.container]: true,
    [classes.selected]: selected
  });

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className={containerClass}>
      <Link selected {...props} className={classes.navLink}>
        {children}
      </Link>
    </div>
  );
};

export default NavBarLink;
