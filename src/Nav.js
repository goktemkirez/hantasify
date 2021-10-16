import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";
import PlaylistDetail from "./pages/PlaylistDetail";

export default function Nav() {
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={(history) => (
          <AppBar position="static">
            <Tabs
              value={
                history.location.pathname !== "/"
                  ? history.location.pathname
                  : false
              }
            >
              <Tab label="Home" value="/home" component={Link} to="/home" />
              <Tab
                label="Profile"
                value="/profile"
                component={Link}
                to="/profile"
              />
              <Tab
                label="Playlists"
                value="/playlists"
                component={Link}
                to="/playlists"
              />
            </Tabs>
          </AppBar>
        )}
      ></Route>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/playlists" component={Playlists} />
        <Route exact path="/playlists/:id" component={PlaylistDetail} />
      </Switch>
    </BrowserRouter>
  );
}
