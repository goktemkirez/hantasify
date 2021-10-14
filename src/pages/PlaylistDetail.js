import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import authAxios from "../components/axios";

function PlaylistDetail() {
  const { id } = useParams();
  const [playlistDetailData, setPlaylistDetailData] = useState([]);

  useEffect(() => {
    getPlaylistDetail();
  }, []);

  const getPlaylistDetail = async () => {
    try {
      // setLoading(true);
      const result = await authAxios.get(`/playlists/${id}`);
      console.log(result.data.items);
      setPlaylistDetailData(result.data.items);
      console.log(playlistDetailData);
    } catch (error) {
      console.log("error", error);
    } finally {
      // setLoading(false);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    }
  };

  return (
    <div>
      <h2>test - {id}</h2>
    </div>
  );
}

export default PlaylistDetail;

// BARIŞ Playlist sayfasıyla aynı şekilde yapıyorum, aşağıdaki gibi hata veriyor.
//Nette baktım, function a prop olarak id'yi ver yazıyor da olmuyor.

// src\pages\PlaylistDetail.js
//   Line 12:6:  React Hook useEffect has a missing dependency: 'getPlaylistDetail'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
// overrideMethod @ react_devtools_backend.js:2526
// printWarnings @ webpackHotDevClient.js:138
// handleWarnings @ webpackHotDevClient.js:143
// push../node_modules/react-dev-utils/webpackHotDevClient.js.connection.onmessage @ webpackHotDevClient.js:210

// BARIŞ Dün bahsettiğim consoledaki hata da, parametreyle bu sayfaya geçince şöyle çıkıyor:

// Material-UI: The value provided to the Tabs component is invalid.
// None of the Tabs' children match with `/playlists/37i9dQZF1DZ06evNZXrVBK`.
// You can provide one of the following values: /home, /profile, /playlists.
