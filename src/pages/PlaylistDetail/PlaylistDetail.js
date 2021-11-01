import React, { useEffect, useState } from "react";
import authAxios from "../../components/axios";
import { Box, Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useParams } from "react-router-dom";

import TrackCard from "../../components/TrackCard/TrackCard";
import { useStyles } from "./PlaylistDetail.style";

function PlaylistDetail() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [playlistDetailData, setPlaylistDetailData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPlaylistDetail();
  }, []);

  const getPlaylistDetail = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/playlists/${id}`);
      console.log(result.data?.tracks?.items);
      setPlaylistDetailData(result.data?.tracks?.items);
      console.log(playlistDetailData);
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
      <Container maxWidth="lg" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="pulse" width="240">
              loading
            </Skeleton>
          </Box>
        ) : (
          <>
            {playlistDetailData.map((dataItem) => (
              <TrackCard
                key={`${dataItem?.track?.id}`}
                owner={`${dataItem?.track?.album?.artists[0]?.name}`}
                img={`${dataItem?.track?.album?.images[0]?.url}`}
                name={`${dataItem?.track?.name}`}
                trackUrl={`${dataItem?.track?.preview_url}`}
              />
            ))}
          </>
        )}
      </Container>
    </div>
  );
}

export default PlaylistDetail;
