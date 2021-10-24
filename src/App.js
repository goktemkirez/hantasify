import { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import SideBar from "./components/SideBar";

import { ROUTES, routes } from "./routes";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const RenderedRoute = (props) => {
    const { path, component, name, isPublic } = props;
    const Component = component;

    return (
      <Route
        path={path}
        exact
        render={(props) => {
          if (isUserLoggedIn || isPublic) {
            return <Component {...props} />;
          } else {
            return <Redirect to={ROUTES.LOGIN} />;
          }
        }}
      />
    );
  };

  return (
    <div>
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
    </div>
  );
}

export default App;
