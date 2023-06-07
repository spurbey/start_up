"use client";
import React, { useState, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useUserContext } from "../context/user_context";
import DropDown from "../components/common/Dropdown";
import Button from "../components/common/Button";
// import { useRouter } from "next/router";

const ProfilePage = () => {
  // const router = useRouter();
  const [user, setUser] = useState(null);
  const [joinedClubs, setJoinedClubs] = useState([]);
  const [headClubs, setHeadClubs] = useState([]);

  const val = useUserContext();

  useEffect(() => {
    //   // Fetch user data based on username from the backend
    //   fetchUserData(props.fetchdata)
    //     .then((userData) => {
    //       setUser(userData);
    //       setJoinedClubs(userData.joinedClubs);
    //       setHeadClubs(userData.headClubs);
    //     })
    //     .catch((error) => console.error(error));
    console.log("Profile", val.email);
    const p = {
      username: val.userName, //localStorage.getItem("username"),
      email: val.email, //localStorage.getItem("email"),
    };
    // console.log(localStorage.getItem("email"));
    setUser(p);
    // router.push("/login");
  }, []);

  // const fetchUserData = (fetch_data) => {
  //   // Make an HTTP request to your backend API to fetch user data
  //   return fetch(`http://localhost:8000/api/login`,{
  //     method:"POST",
  //     headers:{
  //       "content-type":"application/json",
  //     },
  //     body:JSON.stringify({
  //       email:fetch_data.email,
  //       password:fetch_data.password
  //     })
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch user data");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       return {
  //         name: data.email,
  //         username: data.username,
  //         profilePicUrl: data.profilePicUrl,
  //         joinedClubs: data.joinedClubs, // Assuming the backend provides an array of joined clubs
  //         headClubs: data.headClubs, // Assuming the backend provides an array of head clubs
  //       };
  //     });
  // };

  if (!user) {
    return <div>Loading...</div>;
  }
  const profilePicUrl =
    user.profilePicUrl ||
    "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png";

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <img
            className="profile-pic"
            src={profilePicUrl}
            alt="Profile Picture"
          />
        </div>
        <div className="profile-info">
          <h1 className="name">{user.name}</h1>
          <h2 className="username">{user.username}</h2>
          <button className="button button-secondary">Edit Profile</button>
        </div>
        <div className="side-header">
          <div className="icons">
            <span className="chat-icon">
              <AiFillMessage />
            </span>
            <span className="notification-icon">
              <IoMdNotifications />
            </span>
          </div>
          <div className="create-club-organization">
            <Button className="button-primary">
              <BsFillPlusCircleFill className="p-icon" />
              Create Club/Organization
            </Button>
          </div>
        </div>
      </div>

      <div className="p-search">
        <input
          type="text"
          placeholder="Search by name/code"
          className="search-input"
        />
        <Button className="button-primary">JOIN</Button>
      </div>
      <DropDown options={joinedClubs.map((club) => club.name)}>
        Joined Club/Organization
      </DropDown>
      <DropDown options={headClubs.map((club) => club.name)}>
        Head of Club/Organization
      </DropDown>
    </div>
  );
};

export default ProfilePage;
