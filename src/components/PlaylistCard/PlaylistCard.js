import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import { useStyles } from "./PlaylistCard.style";
import { ROUTES } from "../../routes";

export default function PlaylistCard(props) {
  const { name, img, owner, urlLink, tracksUrl, onDeleteClick } = props;
  const classes = useStyles();
  let history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {owner}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank" href={urlLink}>
          Spotify
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push(ROUTES.PLAYLISTS + '/' + tracksUrl)}
        >
          Discover
        </Button>

        {/* Bunu buraya koyuyorum çünkü gidip öteki playlistleri harcamayalım şimdi silmeyelim yoktan yere :D */}
        {name === "New Playlist" && (
          <Button
            size="small"
            color="secondary"
            onClick={() => {
              if (onDeleteClick) {
                onDeleteClick();
              }
            }}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
