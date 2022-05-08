import { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";

import SideBar from "../components/SideBar";

import { ROUTES, routes } from "../routes";

import { useStyles } from "./App.style";
import PageWrapper from "../components/PageWrapper";
import { setAuthorizationToken } from "../components/axios";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const classes = useStyles();
  const authToken = localStorage.getItem("apiKey");

  useEffect(() => {
    const loginControl = async () => {
      if (!!authToken) {
        setAuthorizationToken(authToken);
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    };
    loginControl();
  }, [authToken]);

  if (!!authToken) {
    setAuthorizationToken(authToken);
    // setIsUserLoggedIn(true);
    // BARIŞ loggedin true yapınca Too many re-renders. React limits the number of renders to prevent an infinite loop.
  }

  const RenderedRoute = (props) => {
    const { path, component, name, isPublic } = props;
    const Component = component;

    return (
      <Route
        name={name}
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
                key={route.path}
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
