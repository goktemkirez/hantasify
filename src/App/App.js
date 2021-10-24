import { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";

import SideBar from "../components/SideBar";

import { ROUTES, routes } from "../routes";

import { useStyles } from "./App.style";
import PageWrapper from "../components/PageWrapper";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const classes = useStyles();

  const RenderedRoute = (props) => {
    const { path, component, name, isPublic } = props;
    const Component = component;

    return (
      <Route
        path={path}
        exact
        render={(props) => {
          if (isUserLoggedIn || isPublic) {
            return (
              <>
                {!isPublic && <SideBar />}
                <PageWrapper>
                  <Component {...props} />
                </PageWrapper>
              </>
            );
          } else {
            return <Redirect to={ROUTES.LOGIN} />;
          }
        }}
      />
    );
  };

  return (
    <Box className={classes.appWrapper}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return (
              <RenderedRoute
                exact
                path={route.path}
                component={route.component}
                isPublic={route.isPublic}
              />
            );
          })}
          <Redirect to={isUserLoggedIn ? ROUTES.DASHBOARD : ROUTES.LOGIN} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
