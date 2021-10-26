import React, { useEffect, useState } from "react";
import authAxios from "../../components/axios";
import {
  Box,
  Container,
  makeStyles,
  Button,
  Avatar,
  Typography,
  Link,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

function Login() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      setLoading(true);
    } catch (error) {
      console.log("error", error);
    } finally {
      // setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

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
    <div>
      {/* BARIŞ bunun daha mantıklı bir yolu var mı? Sadece bu sayfaya background vermek için bunu buldum */}
      <style>{"body { background-color: #EBECF0; }"}</style>
      <Container maxWidth="xl" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="pulse" width="240">
              loading
            </Skeleton>
          </Box>
        ) : (
          <div className={classes.subContainer}>
            <div className={classes.loginCard}>
              <div className={classes.logoDiv}>
                <Avatar
                  variant="rounded"
                  alt=" "
                  src="/static/images/avatar/3.jpg"
                  className={classes.img}
                />
                <Typography variant="h5">Hantasify</Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                className={classes.loginButton}
                onClick={handleLogin}
              >
                Log in with Spotify
              </Button>
            </div>
            <div className={classes.linkContainer}>
              <Link href="#" className={classes.link}>
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#EBECF0",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
  },
  loginCard: {
    width: "530px",
    height: "260px",
    borderRadius: "3px",
    backgroundColor: "#FAFBFC",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "40px",
    alignItems: "center",
  },
  logoDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  img: {
    marginRight: "16px",
    borderRadius: "0",
  },
  hantasify: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22.13px",
    lineHeight: "27px",
    color: "#121212",
  },
  loginButton: {
    height: "40px",
    backgroundColor: "#8174F7",
    textTransform: "none",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "19px", //BARIŞ burda butona :hover yazmak yerin theme devreyee giriyor değil mi?
  },
  link: {
    //BARIŞ fontfamily yi Figmada yazan yaptım ama hiç benzemedi ordaki Link e
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#8174F7",
  },
});

export default Login;
