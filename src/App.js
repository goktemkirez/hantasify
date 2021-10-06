import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Playlists">
            <Playlists />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  function Home() {
    return <h2>Home</h2>;
  }
}

export default App;
