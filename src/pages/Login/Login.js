import React from "react";
import { Container, Button, Avatar, Typography, Link } from "@material-ui/core";

import { useStyles } from "./Login.style";

function Login() {
  const classes = useStyles();

  const handleLogin = () => {
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const redirectUri = "http://localhost:3000";
    const clientId = "43c68cbe5b74480ead8fd16b6f9e30dc";

    const scopes = ["user-read-email", "user-read-private"];

    const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}`;
    window.location.replace(loginUrl);
  };

  return (
    <Container className={classes.containerStyle}>
      {/* BARIŞ bunun daha mantıklı bir yolu var mı? Sadece bu sayfaya background vermek için bunu buldum */}
      <style>{"body { background-color: #EBECF0; }"}</style>
      <Container className={classes.subContainer}>
        <Container className={classes.loginCard}>
          <Container className={classes.logoDiv}>
            <Avatar
              variant="rounded"
              alt=" "
              src="/static/images/avatar/3.jpg"
              className={classes.img}
            />
            <Typography variant="h5">Hantasify</Typography>
          </Container>
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            className={classes.loginButton}
            onClick={handleLogin}
          >
            Log in with Spotify
          </Button>
        </Container>
        <Container className={classes.linkContainer}>
          <Link href="#">Privacy Policy</Link>
        </Container>
      </Container>
    </Container>
  );
}

export default Login;
