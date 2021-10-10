import React, { useEffect, useState } from "react";
import authAxios from "../components/axios";
import { Box, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ProfileCard from "../components/ProfileCard";

function Profile() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    console.log("component ilk yüklendiğinde çalışırım");
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/me`);
      console.log(result.data);
      setProfileData(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container maxWidth="sm" className={classes.containerStyle}>
        <ProfileCard
          product={profileData.product}
          displayName={profileData.display_name}
          email={profileData.email}
          followers={"1"}
        />
        <Box component="div" m={1} className={classes.boxStyle}>
          <Button variant="contained" />
          <h1>PROFİLE PAGE</h1>
          <h5>{profileData.country}</h5>
          <h5>{profileData.display_name}</h5>
          <h5>{profileData.email}</h5>
          <h5>{profileData.href}</h5>
          <h5>Followers :{"1"}</h5>
          <h5>{profileData.product}</h5>

          {/* GELEN DATADA FOLLOWERS İÇİNDE TOTAL DATASINI NASIL ÇEKİCEM. BARIŞ */}
          {/* {profileData.map((rowData, i) => (
            <div>
              <h4>{rowData.email}</h4>
              <h4>{rowData.followers.total}</h4>
            </div>
          ))} */}
        </Box>
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  containerStyle: {
    padding: 10,
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    color: "#4DDA63",
  },
});

export default Profile;
