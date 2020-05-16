import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Router = props => {
  const { routes } = props;
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.redirect)
          return (
            <Redirect
              exact={prop.exact}
              from={prop.path}
              to={prop.to}
              key={key}
            />
          );
        return (
          <Route
            path={prop.path}
            exact={prop.exact}
            component={prop.component}
            key={key}
          />
        );
      })}
    </Switch>
  );
};

export default Router;
