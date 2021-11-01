import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./ProfileCard.style";

const ProfileCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.product}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.displayName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.email}
        </Typography>
        <Typography variant="body2" component="p">
          {`${props.followers} Followed - ${props.followers} Follower`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign Out</Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
