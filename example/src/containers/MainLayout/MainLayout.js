import React from "react";
import MainRouter from "../../routes/Router";
import mainRoutes from "../../routes/mainRoutes";

import NavBar from "../../components/NavBar/NavBar";
import NavBarLink from "../../components/NavBarLink/NavBarLink";
import SideMenu from "../../components/SideMenu/SideMenu";

import { withTheme, makeStyles } from "mt-elements";
import MainLayoutStyles from "./MainLayoutStyles";

const MainLayout = props => {
  const useStyles = makeStyles(MainLayoutStyles, props.theme);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar>
        <NavBarLink to="/getting-stared">Getting stared</NavBarLink>
        <NavBarLink to="/docs">Docs</NavBarLink>
        <NavBarLink to="/components">Components</NavBarLink>
      </NavBar>
      <div className={classes.contentContainer}>
        <div className={classes.mainContent}>
          <SideMenu />
          <MainRouter routes={mainRoutes} />
        </div>
      </div>
    </div>
  );
};

export default withTheme(MainLayout);
