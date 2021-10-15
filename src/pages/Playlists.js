import React, { useEffect, useState } from "react";
import authAxios from "../components/axios";
import { Box, Container, makeStyles } from "@material-ui/core";
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

  return (
    <div>
      <Container maxWidth="xl" className={classes.containerStyle}>
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
