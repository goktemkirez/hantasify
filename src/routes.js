import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";
import PlaylistDetail from "./pages/PlaylistDetail";

export const ROUTES = {
  DASHBOARD: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  PLAYLISTS: "/playlists",
  PLAYLIST_DETAIL: "/playlists/:id",
};

export const routes = [
  {
    path: ROUTES.DASHBOARD,
    component: Playlists,
    name: "Playlists",
    isPublic: false,
  },
  {
    path: ROUTES.LOGIN,
    component: Login,
    name: "Login",
    isPublic: true,
  },
  {
    path: ROUTES.PROFILE,
    component: Profile,
    name: "Profile",
    isPublic: false,
  },
  {
    path: ROUTES.PLAYLISTS,
    component: Playlists,
    name: "Playlists",
    isPublic: false,
  },
  {
    path: ROUTES.PLAYLIST_DETAIL,
    component: PlaylistDetail,
    name: "Playlist Detail",
    isPublic: false,
  },
];
