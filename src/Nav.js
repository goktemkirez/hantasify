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
