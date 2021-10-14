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

export default function MediaCard(props) {
  const classes = useStyles();
  //   let history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardTop}>
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
          Go
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

/* <Button
size="small"
color="primary"
onClick={history.push({
  pathname: "/playlist",
  search: "?query=abc",
  state: { detail: "some_value" },
})}
>
Go with Push
</Button> */
