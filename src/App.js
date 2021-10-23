import Nav from "./Nav";
import Login from "./pages/Login";
import PersistentDrawerLeft from "./Drawer";

function App() {
  return (
    <div>
      {/* <Nav /> */}
      {/* <Login></Login> */}
      <PersistentDrawerLeft></PersistentDrawerLeft>
    </div>
  );
}

export default App;

/* <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Playlists">
            <Playlists />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */
