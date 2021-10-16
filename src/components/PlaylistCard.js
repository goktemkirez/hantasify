import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: 10,
  },
  media: {
    height: 350,
  },
});

export default function PlaylistCard(props) {
  const classes = useStyles();
  //   let history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea
        href={`http://localhost:3000/playlists/${props.tracksUrl}`}
      >
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.owner}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href={props.urlLink}
        >
          Spotify
        </Button>
        <Button
          size="small"
          color="primary"
          href={`http://localhost:3000/playlists/${props.tracksUrl}`}
        >
          Discover
        </Button>
      </CardActions>
    </Card>
  );
}
