import React, { use, useEffect, useState } from "react";
import "./Profile.css";
import { useUser } from "../../context/UseContext";
import profile_img from '../../assets/profile.png'
import { logout } from "../../firebase";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import back_arrow from "../../assets/back_arrow_icon.png"
import { Link } from "react-router-dom";

const db = getFirestore();

const fetchUserByEmail = async (email) => {
  try {
    const q = query(collection(db, "user"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data()
  } catch (error) {
    console.error("Error getting document: ", error);
  }
};

const NetflixUserProfile = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserByEmail(user.email);
      setUserData(data);
    };

    getUserData();
  }, [user.email])

  if (!userData) {
    return <div>Loading...</div>; // Show loading until user data is fetched
  }

  return (
    <div className="profile-container">
      <h1 className="welcome"><Link to={'/'}><img src={back_arrow} className="back-arrow" /></Link>Welcome, {userData.name}!</h1>
      <div className="profile-details">
        <img src={profile_img} alt={userData.name} className="profile-avatar" />
        <div className="info">
        <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      </div>
      <button onClick={()=>logout()} className="logout-button">Logout</button>
    </div>
  );
};

export default NetflixUserProfile;