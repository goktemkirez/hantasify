import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 150,
    margin: 10,
  },
  card: {
    height: 250,
  },
  media: {
    height: 150,
  },
  content: {
    width: 120,
    height: 70,
    wordWrap: "break-word",
  },
  contentTitle: {},
  contentBody: {
    bottom: 0,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} color="primary">
      <CardActionArea className={classes.card} href={props.trackUrl}>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="subtitle2"
            className={classes.contentTitle}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.contentBody}
          >
            {props.owner}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
