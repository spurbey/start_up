"use client";
import React, { useState, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [joinedDropdownOpen, setJoinedDropdownOpen] = useState(false);
  const [headDropdownOpen, setHeadDropdownOpen] = useState(false);
  const [joinedClubs, setJoinedClubs] = useState([]);
  const [headClubs, setHeadClubs] = useState([]);

  const toggleJoinedDropdown = () => {
    setJoinedDropdownOpen(!joinedDropdownOpen);
  };

  const toggleHeadDropdown = () => {
    setHeadDropdownOpen(!headDropdownOpen);
  };

  useEffect(() => {
    // Fetch user data based on username from the backend
    fetchUserData("johndoe")
      .then((userData) => {
        setUser(userData);
        setJoinedClubs(userData.joinedClubs);
        setHeadClubs(userData.headClubs);
      })
      .catch((error) => console.error(error));
  }, []);

  const fetchUserData = (username) => {
    // Make an HTTP request to your backend API to fetch user data
    return fetch(`/api/user/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        return {
          name: data.name,
          username: data.username,
          profilePicUrl: data.profilePicUrl,
          joinedClubs: data.joinedClubs, // Assuming the backend provides an array of joined clubs
          headClubs: data.headClubs, // Assuming the backend provides an array of head clubs
        };
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <img
            className="profile-pic"
            src={user.profilePicUrl}
            alt="Profile Picture"
          />
        </div>
        <div className="profile-info">
          <h1 className="name">{user.name}</h1>
          <p className="username">{user.username}</p>
          <button className="edit-profile-button">Edit Profile</button>
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
            <button className="create-club-button">
              <BsFillPlusCircleFill className="p-icon" />
              Create Club/Organization
            </button>
          </div>
        </div>
      </div>

      <div className="p-search">
        <input
          type="text"
          placeholder="Search by name/code"
          className="search-input"
        />
        <button className="join-button">JOIN</button>
      </div>
      <div className="p-dropdown">
        <button className="dropdown-button" onClick={toggleJoinedDropdown}>
          <IoIosArrowDropdownCircle className="p-icon" />
          Joined Club/Organization
        </button>
        {joinedDropdownOpen && (
          <div className="dropdown-content">
            {joinedClubs.map((club, index) => (
              <a href="#" key={index}>
                {club.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="p-dropdown">
        <button className="dropdown-button" onClick={toggleHeadDropdown}>
          <IoIosArrowDropdownCircle className="p-icon" />
          Head of Club/Organization
        </button>
        {headDropdownOpen && (
          <div className="dropdown-content">
            {headClubs.map((club, index) => (
              <a href="#" key={index}>
                {club.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
