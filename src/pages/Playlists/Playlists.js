import React, { useEffect, useState } from "react";
import authAxios from "../../components/axios";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { AddOutlined } from "@material-ui/icons";

import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import { useStyles } from "./Playlists.style";

function Playlists() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    getToken();

    getPlaylists();
  }, []);

  const getToken = () => {
    // const query = new URLSearchParams(window.location.href);
    // const token = query.get("access_token");
    // localStorage.setItem("apiKey", token);
    var hash = window.location.hash.substring(1);
    var params = {};
    hash.split("&").map((hk) => {
      let temp = hk.split("=");
      params[temp[0]] = temp[1];
    });
    localStorage.setItem("apiKey", params["access_token"]);
  };

  const getPlaylists = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/me/playlists`);
      console.log(result.data.items);
      setPlaylistData(result.data.items);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const createPlaylist = async () => {
    try {
      const result = await authAxios.get(`/me`);
      const response = await authAxios.post(
        `/users/${result.data.id}/playlists`,
        {
          name: "New Playlist",
          description: "New playlist description",
          public: false,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  const removeTracks = async (playlistId) => {
    // https://developer.spotify.com/documentation/general/guides/working-with-playlists/#following-and-unfollowing-a-playlist
    // they say "We have no endpoint for deleting a playlist in the Web API"
    // Burası biraz karışık şimdilik dokunma başka bir şeye bakalım
    // ama eğer ki karta bi fonksiyon koycaksam ve bu fonksiyon da o playlistin id'si ile request atıcaksa bu şekilde implement etmek gerekiyor
    try {
      const response = await authAxios.delete(
        `/playlists/${playlistId}/tracks`
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  return (
    <Box>
      <Box className={classes.topBox}>
        <Typography variant="h5">Playlists</Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddOutlined />}
          onClick={createPlaylist}
        >
          Create Playlist
        </Button>
      </Box>
      <Container maxWidth="xl" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="pulse" width="240">
              loading
            </Skeleton>
          </Box>
        ) : (
          <>
            {playlistData.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                owner={playlist?.owner?.display_name} // Burda neden template literal yaptın direk bu şekilde de geçebilrisin propları
                img={playlist?.images[0]?.url} // Olaylara hep ben bununla bişey yaparım ilerde diye bakıyom :D
                name={playlist?.name}
                urlLink={playlist?.external_urls?.spotify}
                tracksUrl={playlist.id}
                onDeleteClick={() => {
                  removeTracks(playlist.id);
                }}
              />
            ))}
          </>
        )}
      </Container>
    </Box>
  );
}

export default Playlists;
