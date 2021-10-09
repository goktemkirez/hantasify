import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";

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
              <Tab label="Home" value="/Home" component={Link} to="/Home" />
              <Tab
                label="Profile"
                value="/Profile"
                component={Link}
                to="/Profile"
              />
              <Tab
                label="Playlists"
                value="/Playlists"
                component={Link}
                to="/Playlists"
              />
            </Tabs>
          </AppBar>
        )}
      ></Route>

      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Playlists" component={Playlists} />
      </Switch>
    </BrowserRouter>
  );
}

// function Nav() {
//   return (
//     <nav>
//       <ul style={{ display: "flex", justifyContent: "space-between" }}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/Profile">Profile</Link>
//         </li>
//         <li>
//           <Link to="/Playlists">Playlists</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;
