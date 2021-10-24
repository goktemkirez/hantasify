import React from "react";
import { useState } from "react";
import {
  Avatar,
  useTheme,
  Drawer,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
} from "@material-ui/icons";

import { useStyles } from "./SideBar.style";

export default function SideBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <div className={classes.logoDiv}>
          <Avatar
            variant="rounded"
            alt=" "
            src="/static/images/avatar/3.jpg"
            className={classes.img}
          />
          <Typography variant="h5">Hantasify</Typography>
        </div>
        {/* <IconButton
          className={classes.drawerCloseButton}
          onClick={handleDrawerClose}
        >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton> */}
      </div>
      <div className={classes.listDiv}>
        <List className={classes.topList}>
          {["Playlists"].map((text, index) => (
            <ListItem className={classes.topButtons} button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List className={classes.bottomList}>
          {["Profile", "Log Out"].map((text, index) => (
            <ListItem className={classes.drawerButton} button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
