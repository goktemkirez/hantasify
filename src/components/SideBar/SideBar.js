import React from "react";
import { useState, useEffect } from "react";
import {
  Avatar,
  // useTheme,
  Drawer,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  HomeOutlined,
  QueueMusicOutlined,
  VpnKeyOutlined,
  AccountCircleOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";

import { useStyles } from "./SideBar.style";
import { ROUTES } from "../../routes";

export default function SideBar(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(true);
  let history = useHistory();

  useEffect(() => {
    handleDrawerOpen();
  }, []);

  const itemsList = [
    {
      text: "Home",
      icon: <HomeOutlined />,
      onClick: () => history.push(ROUTES.DASHBOARD),
    },
    {
      text: "Playlists",
      icon: <QueueMusicOutlined />,
      onClick: () => history.push(ROUTES.PLAYLISTS),
    },
    {
      text: "Login",
      icon: <VpnKeyOutlined />,
      onClick: () => history.push(ROUTES.LOGIN),
    },
  ];
  const itemsListBottom = [
    {
      text: "Profile",
      icon: <AccountCircleOutlined />,
      onClick: () => history.push(ROUTES.PROFILE),
    },
    {
      text: "Log Out",
      icon: <ExitToAppOutlined />,
      onClick: () => logOut(),
    },
  ];

  const logOut = () => {
    localStorage.removeItem("apiKey");
    history.push(ROUTES.LOGIN);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

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
      <Container className={classes.drawerHeader}>
        <Container className={classes.logoDiv}>
          <Avatar
            variant="rounded"
            alt=" "
            src="/static/images/avatar/3.jpg"
            className={classes.img}
          />
          <Typography variant="h5">Hantasify</Typography>
        </Container>
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
      </Container>
      <Container className={classes.listDiv}>
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                className={classes.sidebarButton1}
                button
                onClick={onClick}
                key={text}
              >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <List>
          {itemsListBottom.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button onClick={onClick} key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Drawer>
  );
}
