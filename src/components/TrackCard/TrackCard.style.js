import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
}));
