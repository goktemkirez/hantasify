import React, { useEffect, useState } from "react";
import authAxios from "../components/axios";
import { Box, Button, Container, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import PlaylistCard from "../components/PlaylistCard";

function Playlists() {
  const classes = useStyles();
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
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // BARIŞ POST 403, DELETE 400 dönüyor. Spotify kaynaklı mı, izin mi vermiyor yoksa bende mi hata var?
  const createPlaylist = async () => {
    try {
      const response = await authAxios.post(`/users/ogkirez/playlists`, {
        name: "New Playlist",
        description: "New playlist description",
        public: false,
      });
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  const removeTracks = async () => {
    try {
      const response = await authAxios.delete(
        `/playlists/3mSw18wUFZ8ea6mgSinuzT/tracks`
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  return (
    <div>
      <Button variant="contained" color="default" onClick={createPlaylist}>
        Yeni Playlist
      </Button>
      <Button variant="contained" color="secondary" onClick={removeTracks}>
        Hantasify Test'i Boşalt
      </Button>
      <Container maxWidth="lg" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="pulse" width="240">
              loading
            </Skeleton>
          </Box>
        ) : (
          <>
            {playlistData.map((dataItem) => (
              <PlaylistCard
                key={dataItem.id}
                owner={`${dataItem?.owner?.display_name}`}
                img={`${dataItem?.images[0]?.url}`}
                name={`${dataItem?.name}`}
                urlLink={`${dataItem?.external_urls?.spotify}`}
                tracksUrl={dataItem.id}
              />
            ))}
          </>
        )}
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  containerStyle: {
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    color: "#4DDA63",
  },
});

export default Playlists;
