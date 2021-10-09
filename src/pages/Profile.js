import React, { useEffect, useState } from "react";
import authAxios from "../components/axios";
import { Box, Button, Container, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import ProfileCard from "../components/profileCard";

function Profile() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState();

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
      //2 saniye sonra loadingi false çeksin de aşağıdaki loading componentlerini gör diye koydum yoksa direk setLoading(false) yeterli
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div>
      <Container maxWidth="sm" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="wave" width="240" />
            <Skeleton animation="wave" width="240" />
            <Skeleton animation="wave" width="240" />
            <Skeleton animation="wave" width="240" />
          </Box>
        ) : (
          <>
            <ProfileCard
              Product={profileData.product}
              DisplayName={profileData.display_name}
              Email={profileData.email}
              Followers={"1"}
            />
            <Box component="div" m={1} className={classes.boxStyle}>
              <Button variant="contained" />
              <h1>PROFİLE PAGE</h1>
              <h5>{profileData.country}</h5>
              <h5>{profileData.display_name}</h5>
              <h5>{profileData.email}</h5>
              <h5>{profileData.href}</h5>
              {/*loading ile ilgili bi örnek koydum daha iyisini yapabiliriz konsept olarak kafanda olsun */}

              {/* Followers countı bu şekilde alabilirsin eminim sen de bunu yaptın ama bir şekilde hata aldın. Burdaki problem şu profile.followers dediğinde eğer o an profile undefined ise kızar. cannot read property xxx of undefined diye bu yüzden obje içi proportylere erişirken dikkatli olmak lazım. soru işareti ile bir kullanım var bir de varsa diye x && x.profile && x.profile.name gibi*/}
              {/* 1 tane lock dosyası tut ya package.lock ya da yarn.lock bu lockların ne işe yaradığını okumanı tavsiye ederim */}

              <h5>{`Followers ${profileData?.followers?.total}`}</h5>
              <h5>{profileData.product}</h5>

              {/* GELEN DATADA FOLLOWERS İÇİNDE TOTAL DATASINI NASIL ÇEKİCEM. BARIŞ */}
              {/* {profileData.map((rowData, i) => (
              <div>
                <h4>{rowData.email}</h4>
                <h4>{rowData.followers.total}</h4>
              </div>
            ))} */}
            </Box>
          </>
        )}
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
