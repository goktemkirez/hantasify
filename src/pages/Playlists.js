import React, { useEffect, useState } from "react";
import authAxios from "../components/axios";

function Playlists() {
  const [loading, setLoading] = useState(false);
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    getPlaylists();
  }, []);

  const getPlaylists = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/me/playlists`);
      console.log(result.data.items);
      setPlaylistData(result.data.items);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Playlists will be here!</h1>
      <h5>{loading}</h5>
      {playlistData.map((dataItem) => (
        <h5 key={dataItem.id}>{dataItem.name}</h5>
      ))}
    </div>
  );
}

export default Playlists;
