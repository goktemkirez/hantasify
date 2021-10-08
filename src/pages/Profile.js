import React, { useEffect, useState } from "react";
import authAxios from "../components/axios";

function Profile() {
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
      <h1>PROFİLE PAGE</h1>
      <h5>{profileData.country}</h5>
      <h5>{profileData.display_name}</h5>
      <h5>{profileData.email}</h5>
      <h5>{profileData.href}</h5>
      <h5>Followers :{profileData.id}</h5>
      {/* GELEN DATADA FOLLOWERS İÇİNDE TOTAL DATASINI NASIL ÇEKİCEM. BARIŞ */}
      <h5>{profileData.product}</h5>
      {/* HTML A ELEMENTİNDE HREF YOK MU BURDA? BARIŞ */}
    </div>
  );
}

export default Profile;
