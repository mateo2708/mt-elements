import React, { useEffect } from "react";
import MainRouter from "../../routes/Router";
import { pagesRoutes } from "../../routes/routesGenerator";
import { useLocation } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import NavBarLink from "../../components/NavBarLink/NavBarLink";
import SideMenu from "../../components/SideMenu/SideMenu";

import { withTheme, makeStyles } from "mt-elements";
import MainLayoutStyles from "./MainLayoutStyles";

import { useSelector, useDispatch } from "react-redux";
import { updatePath } from "../../redux/actions";

import { getAllPages } from "../../constants/dataStructure";

const MainLayout = props => {
  const useStyles = makeStyles(MainLayoutStyles, props.theme);
  const classes = useStyles();

  const location = useLocation();

  const firstLevel = useSelector(state => state.firstLevel);
  const secondLevel = useSelector(state => state.secondLevel);

  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = location;
    dispatch(updatePath(pathname));
  }, [dispatch, location]);

  return (
    <div className={classes.container}>
      <NavBar>
        {getAllPages().map((page, key) => {
          return (
            <NavBarLink
              key={key}
              selected={firstLevel === `${page.route}`}
              to={`/mt-elements/${page.route}`}
              replace
            >
              {page.title}
            </NavBarLink>
          );
        })}
      </NavBar>
      <div className={classes.contentContainer}>
        <SideMenu page={firstLevel} selectedItem={secondLevel} />
        <div className={classes.mainContent}>
          <MainRouter routes={pagesRoutes()} />
        </div>
      </div>
    </div>
  );
};

export default withTheme(MainLayout);
