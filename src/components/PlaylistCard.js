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
  const { name, img, owner, urlLink, tracksUrl, onDeleteClick } = props;
  const classes = useStyles();
  //   let history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* bu target href falan bozuyor sitemi bunları kullanmamaya calısalım butona tıklıyorum altta bu çalışıyo her şey garip çalışmış oluyor amacını anlamadım neden ekledin ki  */}
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
          href={`http://localhost:3000/playlists/${tracksUrl}`} //Bu href olayını kullanmıyoruz bunları history.pushla değiştirme şansın var mı
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
