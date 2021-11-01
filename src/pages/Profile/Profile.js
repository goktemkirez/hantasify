import React, { useEffect, useState } from "react";
import authAxios from "../../components/axios";
import { Box, Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useStyles } from "./Profile.style";

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
      // setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <Container maxWidth="sm" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="pulse" width="240">
              loading
            </Skeleton>
          </Box>
        ) : (
          <>
            <ProfileCard
              product={profileData.product}
              displayName={profileData.display_name}
              email={profileData.email}
              followers={`Followers ${profileData?.followers?.total}`}
            />
          </>
        )}
      </Container>
    </div>
  );
}

export default Profile;
