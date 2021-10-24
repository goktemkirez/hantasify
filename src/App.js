import Nav from "./Nav";
import Login from "./pages/Login";
import PersistentDrawerLeft from "./Drawer";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { ROUTES, routes } from "./routes";
import { useState } from "react";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

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
      {/* <Nav /> */}
      {/* <Login></Login> */}
      {/* <PersistentDrawerLeft></PersistentDrawerLeft> */}
    </div>
  );
}

export default App;
