import React from "react";
import NavBarStyles from "./NavBarStyles";

import { FaGithub, FaNpm } from "react-icons/fa";
import { withTheme, makeStyles } from "mt-elements";

import MTlogo from "../../assets/LogoMTElements.svg";

const NavBar = props => {
  const useStyles = makeStyles(NavBarStyles, props.theme);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={MTlogo} alt="MT Elements logo" />
      </div>
      <div className={classes.linksContainer}>{props.children}</div>
      <div className={classes.socialLinks}>
        <a
          href="https://github.com/mateo2708/mt-elements"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={classes.icon} />
        </a>
        <a
          href="https://www.npmjs.com/package/mt-elements"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaNpm className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default withTheme(NavBar);
