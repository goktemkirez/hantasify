import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Playlists">Playlists</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

// DAHA SONRA MUI DENE
// import { Tab, Tabs, AppBar, Link } from "@material-ui/core";
// import Profile from "./pages/Profile";
// import Playlists from "./pages/Playlists";

// export default function Nav() {
//   return (
//     <AppBar>
//       <Tabs>
//         <Link title="asd" target="/Profiles" />
//         <Tab label="Playlists" />
//         <Tab label="Profile" />
//       </Tabs>
//     </AppBar>
//   );
// }
