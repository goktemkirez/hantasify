import React, { useEffect, useState } from "react";
import authAxios from "../components/axios";
import {
  Box,
  Container,
  makeStyles,
  Button,
  Avatar,
  Typography,
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

  return (
    <div>
      <style>{"body { background-color: #EBECF0; }"}</style>
      <Container maxWidth="xl" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="pulse" width="240">
              loading
            </Skeleton>
          </Box>
        ) : (
          <div className={classes.loginCard}>
            <div className={classes.logoDiv}>
              <Avatar
                variant="rounded"
                alt="Hantasify"
                src="/static/images/avatar/3.jpg"
              />
              <Typography variant="h5">Hantasify</Typography>
            </div>
            <Button variant="contained" color="primary" fullWidth={true}>
              Log in with Spotify
            </Button>
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
  logoDiv: { display: "flex", flexDirection: "row" },
  img: {
    width: "40px",
    height: "40px",
    backgroundColor: "#C4C4C4",
  },
});

export default Login;
